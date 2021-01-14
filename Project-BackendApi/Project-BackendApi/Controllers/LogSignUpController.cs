using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using Project_BackendApi.Services.JWTService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project_BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogSignUpController : ControllerBase
    {

        public readonly MarketplaceDB _db;

        private readonly IConfiguration _config; // To read from the config file
        private IJWTService _jwtService;

        

        public LogSignUpController(IConfiguration config, IJWTService jwtservice, MarketplaceDB db)
        {
            _config = config;
            _jwtService = jwtservice;
            _db = db;
        }

        [HttpGet]
        public List<CustomerModel> getall()
        {
            return _db.CustomerModels.ToList();
        }


        // POST api/<LogSignUpController>
        [HttpPost("signup/customer")]
        public IActionResult CustomerPost(CustomerModel newcustomer)
        {
            // CustomerModelDB.Add(newcustomer);
            var customerWithSameEmail = _db.CustomerModels.FirstOrDefault(m => m.Email.ToLower() == newcustomer.Email.ToLower()); //check email already exit or not


            if (customerWithSameEmail == null)
            {
                _db.CustomerModels.Add(newcustomer);
                _db.SaveChanges();



                return Ok(); //new page
            }
            else
            {

                return BadRequest();
            }


        }


        [HttpPost("signup/seller")]
        public IActionResult SellersPost(SellerModel newseller)
        {
            // CustomerModelDB.Add(newcustomer);
            var SellerWithSameEmail = _db.SellerModels.FirstOrDefault(m => m.Email.ToLower() == newseller.Email.ToLower()); //check email already exit or not


            if (SellerWithSameEmail == null)
            {
                _db.SellerModels.Add(newseller);
                _db.SaveChanges();
               


                return Ok(); //new page
            }
            else
            {

                return BadRequest();
            }


        }

       
        // POST api/<LogSignUpController>
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginModel login)
        {
            try
            {            // CustomerModelDB.Add(newcustomer);
                var CheckEmailSeller = _db.SellerModels.FirstOrDefault(m => m.Email.ToLower() == login.Email.ToLower()); //check email already exit or not
                var CheckPasswerdSeller = _db.SellerModels.FirstOrDefault(m => m.Password == login.Password);

                var CheckEmailCustomer  = _db.CustomerModels.FirstOrDefault(m => m.Email.ToLower() == login.Email.ToLower()); //check email already exit or not
                var CheckPasswerdCustomer = _db.CustomerModels.FirstOrDefault(m => m.Password == login.Password);


                
                if ((CheckEmailSeller == null || CheckPasswerdSeller == null)&& (CheckEmailCustomer == null || CheckPasswerdCustomer == null))
                {
                    return BadRequest(); //New page
                }



                else
                {

                    // Return token
                    var tokenString = _jwtService.GenerateJWTtoken(login);
                    return Ok(new
                    {
                        token = tokenString
                    });
                }



            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }



}