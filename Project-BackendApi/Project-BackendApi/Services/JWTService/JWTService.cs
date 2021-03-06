﻿using Project_BackendApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Project_BackendApi.DATA;


namespace Project_BackendApi.Services.JWTService
{
    public class JWTService : IJWTService
    {
        private readonly IConfiguration _config;
        private readonly MarketplaceDB _db;
        public JWTService(IConfiguration config, MarketplaceDB db)
        {
            _config = config;
            _db = db;
        }

        public string GenerateJWTtoken(LoginModel user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // Find User role
            var isSeller = _db.SellerModels.FirstOrDefault(m => m.Email.ToLower() == user.Email.ToLower());
            var isCustomer = _db.CustomerModels.FirstOrDefault(m => m.Email.ToLower() == user.Email.ToLower());
            var isAdmin =    _db.AdminModels.FirstOrDefault(m => m.Email.ToLower() == user.Email.ToLower());

            var currentUserRole = new object();
            var currentUserId = new object();

            if (isSeller != null)
            { 
                currentUserRole = isSeller.UserRole;
                currentUserId = isSeller.SellerId;
            }
            else if(isAdmin!=null)
            {
                currentUserRole = isAdmin.UserRole;
                currentUserId = isAdmin.AdminId;

            }
            else
            { 
                currentUserRole = isCustomer.UserRole;
                currentUserId = isCustomer.CustomerId;
            }

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("id", currentUserId.ToString()),
                new Claim("role", currentUserRole.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddMinutes(30),
            signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
