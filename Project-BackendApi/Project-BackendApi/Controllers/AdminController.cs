﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using Project_BackendApi.Services.AdminService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : Controller
    {
        private IAdminService _AdminService;
        private readonly MarketplaceDB _context;
        public AdminController(IAdminService AdminService, MarketplaceDB context)
        {
            _AdminService = AdminService;
            _context = context;
        }

        // GET: Admin/Create
        [HttpGet("details")]
        public List<int> GetDetails()
        {
            return _AdminService.GetData();
        }

        [HttpGet("details/customers")]
        public List<CustomerModel> GetCustomers()
        {
            return _AdminService.GetCustomers();
        }

        [HttpGet("details/sellers")]
        public List<SellerModel> GetSellers()
        {
            return _AdminService.GetSellers();
        }

        // POST: Admin/Delete/5
        [HttpDelete("cusotmer/{id}")]
        public async Task<ActionResult<CustomerModel>> DeleteUserCustomer(int id)
        {
                var customerModel = await _context.CustomerModels.FindAsync(id);

                if (customerModel == null) { return BadRequest(); }
                _context.CustomerModels.Remove(customerModel);
                await _context.SaveChangesAsync();
                return customerModel;

        }

        [HttpDelete("seller/{id}")]
        public async Task<ActionResult<SellerModel>> DeleteUserSellerr(int id)
        {
            var sellerModel = await _context.SellerModels.FindAsync(id);

            if (sellerModel == null) { return BadRequest(); }
            _context.SellerModels.Remove(sellerModel);
            await _context.SaveChangesAsync();
            return sellerModel;

        }
    }
}