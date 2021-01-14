using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Project_BackendApi.Models;
using Project_BackendApi.Services.JWTService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project_BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogSignUpController : ControllerBase
    {

        private readonly IConfiguration _config; // To read from the config file
        private IJWTService _jwtService;

        static List<CustomerModel> CustomerModelDB = loadDB();

        public LogSignUpController(IConfiguration config, IJWTService jwtservice)
        {
            _config = config;
            _jwtService = jwtservice;
        }

        public static List<CustomerModel> loadDB()
        {
            List<CustomerModel> temp = new List<CustomerModel>();
            temp.Add(new CustomerModel
            {
                ID = 1,
                Name = "Group6",
                Email = "group6@gmail.com",
                Address = "Galle",
                ContatctNo = "712099943",
                CustomerImage = "image.png",
                Password = "Group6",
                ReTypePassword = "Group6"
            });

            temp.Add(new CustomerModel
            {
                ID = 1,
                Name = "Group61",
                Email = "group61@gmail.com",
                Address = "Galle1",
                ContatctNo = "7120999431",
                CustomerImage = "image1.png",
                Password = "Group61",
                ReTypePassword = "Group61"
            });


            return temp;


        }


        // POST api/<LogSignUpController>
        [HttpPost("signup/customer")]
        public IActionResult CustomerPost(CustomerModel newcustomer)
        {
            // CustomerModelDB.Add(newcustomer);
            var customerWithSameEmail = CustomerModelDB.FirstOrDefault(m => m.Email.ToLower() == newcustomer.Email.ToLower()); //check email already exit or not


            if (customerWithSameEmail == null)
            {
                CustomerModelDB.Add(newcustomer);


                return Ok(); //new page
            }
            else
            {

                return BadRequest();
            }


        }


        [HttpPost("signup/seller")]
        public string SellersPost(CustomerModel newseller)
        {
            // CustomerModelDB.Add(newcustomer);
            var SellerWithSameEmail = CustomerModelDB.FirstOrDefault(m => m.Email.ToLower() == newseller.Email.ToLower()); //check email already exit or not


            if (SellerWithSameEmail == null)
            {
                CustomerModelDB.Add(newseller);


                return "Done registered "; //new page
            }
            else
            {

                return "this Email Already Exist";
            }


        }

       
        // POST api/<LogSignUpController>
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginModel login)
        {
            try
            {            // CustomerModelDB.Add(newcustomer);
                var CheckEmail = CustomerModelDB.FirstOrDefault(m => m.Email.ToLower() == login.Email.ToLower()); //check email already exit or not
                var CheckPasswerd = CustomerModelDB.FirstOrDefault(m => m.Password == login.Password);

                if (CheckEmail == null | CheckPasswerd == null)
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