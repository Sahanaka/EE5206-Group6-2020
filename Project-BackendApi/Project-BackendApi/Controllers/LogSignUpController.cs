using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using Project_BackendApi.Services.CustomerService;
using Project_BackendApi.Services.EncrytService;
using Project_BackendApi.Services.ImageService;
using Project_BackendApi.Services.JWTService;
using Project_BackendApi.Services.MailService;
using Project_BackendApi.Services.SellerService;

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
        private IMailService _mailService;
        private IImageService _iimageService;
        private ISellerService _sellerService;
        private IEncryptService _encryptService;






        public LogSignUpController(ISellerService sellerService, IEncryptService encryptService, IConfiguration config, IJWTService jwtservice, MarketplaceDB db, IMailService mailService, IImageService imageService)
        {
            _config = config;
            _jwtService = jwtservice;
            _db = db;
            _mailService = mailService;
            _iimageService = imageService;
            _sellerService = sellerService;
            _encryptService = encryptService;

        }

        [HttpGet]
        public List<CustomerModel> getall()
        {
            return _db.CustomerModels.ToList();
        }


        // POST api/<LogSignUpController>
        [HttpPost("signup/customer")]
        public async Task<IActionResult> CustomerPost([FromBody] CustomerModel newcustomer)
        {
            // CustomerModelDB.Add(newcustomer);
            var customerWithSameEmail = _db.CustomerModels.FirstOrDefault(m => m.Email.ToLower() == newcustomer.Email.ToLower()); //check email already exit or not


            if (customerWithSameEmail == null)
            {
                //newcustomer.CustomerImage = await _iimageService.SaveImage(newcustomer.ImageData);

                
                var encryPassword = _encryptService.Encryptword(newcustomer.Password);
                var encryReTypePassword = _encryptService.Encryptword(newcustomer.ReTypePassword);


                newcustomer.Password = encryPassword;
                newcustomer.ReTypePassword = encryReTypePassword;
                newcustomer.UserRole = "Customer";
                _db.CustomerModels.Add(newcustomer);
                _db.SaveChanges();

                LoginModel user = new LoginModel();
                user.Email = newcustomer.Email;
                user.Password = newcustomer.Password;

                var tokenString = _jwtService.GenerateJWTtoken(user);

                string url = $"{_config["AppUrl"]}/api/auth/confirmemail?useremail={newcustomer.Email}&token={tokenString}";

                //await _mailService.SendEmailAsync(newcustomer.Email, "Confirm your email", $"<h1>Thank You for registering in S&D com</h1>" +
                //    $"<p>Please confirm your email by <a href='{url}'>Clicking here</a></p>");

                return Ok(new
                {
                    token = tokenString,
                    message = "Success"
                });
            }
            else
            {

                return BadRequest();
            }


        }


        [HttpPost("signup/seller")]
        public async Task<IActionResult> SellersPost([FromForm] SellerModel newseller)
        {
            // CustomerModelDB.Add(newcustomer);
            var SellerWithSameEmail = _db.SellerModels.FirstOrDefault(m => m.Email.ToLower() == newseller.Email.ToLower()); //check email already exit or not


            if (SellerWithSameEmail == null)
            {
                var encryPassword = _encryptService.Encryptword(newseller.Password);
                var encryReTypePassword = _encryptService.Encryptword(newseller.ReTypePassword);


                newseller.Password = encryPassword;
                newseller.ReTypePassword = encryReTypePassword;
                newseller.ShopImage = await _iimageService.SaveImage(newseller.ImageData);
                _db.SellerModels.Add(newseller);
                _db.SaveChanges();

                LoginModel user = new LoginModel();
                user.Email = newseller.Email;
                user.Password = newseller.Password;

                var tokenString = _jwtService.GenerateJWTtoken(user);

                string url = $"{_config["AppUrl"]}/api/auth/confirmemail?useremail={newseller.Email}&token={tokenString}";

                //await _mailService.SendEmailAsync(newseller.Email, "Confirm your email", $"<h1>Welcome to Auth Demo</h1>" +
                //    $"<p>Please confirm your email by <a href='{url}'>Clicking here</a></p>");

                return Ok(new
                {
                    token = tokenString,
                });
            }
            else
            {
                return BadRequest();
            }


        }

       
        // POST api/<LogSignUpController>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginModel login)
        {
            try
            {


                if ((_db.CustomerModels.SingleOrDefault(x => x.Email.ToLower() == login.Email.ToLower())!=null))
                {
                    var customer = _db.CustomerModels.SingleOrDefault(x => x.Email.ToLower() == login.Email.ToLower());

                   var  decriptPwd = _encryptService.Decryptword(customer.Password);
                    if (decriptPwd == login.Password)
                    {
                        var tokenString = _jwtService.GenerateJWTtoken(login);

                        return Ok(new
                        {
                            token = tokenString
                        });
                    }
                    return BadRequest(); //New page

                }
                else if ((_db.SellerModels.SingleOrDefault(x => x.Email.ToLower() == login.Email.ToLower()))!=null)
                {
                    var seller = _db.SellerModels.SingleOrDefault(x => x.Email.ToLower() == login.Email.ToLower());
                    var decriptPwd = _encryptService.Decryptword(seller.Password);
                    if (decriptPwd == login.Password)
                    {
                        var tokenString = _jwtService.GenerateJWTtoken(login);
                        return Ok(new
                        {
                            token = tokenString
                        });
                    }
                    return BadRequest(); //New page

                }
                else
                {
                    return BadRequest(); //New page
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
       

    }



}