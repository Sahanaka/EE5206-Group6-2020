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
    //[Route("api/[controller]")]
    //[ApiController]
    //public class CustomerSignUpController : ControllerBase
    //{
    //    private readonly IConfiguration _config; // To read from the config file
    //    private IJWTService _jwtService;
    //    static List<CustomerModel> CustomerModelDB = loadDB();

    //    public CustomerSignUpController(IConfiguration config, IJWTService jWTService)
    //    {
    //        _config = config;
    //        _jwtService = jWTService;
    //    }

    //    public static List<CustomerModel> loadDB()
    //    {
    //        List<CustomerModel> temp = new List<CustomerModel>();
    //        temp.Add(new CustomerModel
    //        {
    //            ID=1,
    //            Name ="Group6",
    //            Email = "group6@gmail.com",
    //            Address = "Galle",
    //            ContatctNo = "712099943",
    //            CustomerImage = "image.png",
    //            Password = "Group6",
    //            ReTypePassword = "Group6",
    //            UserRole = "Customer"
    //        } );

    //        temp.Add(new CustomerModel
    //        {
    //            ID = 1,
    //            Name = "Group61",
    //            Email = "group61@gmail.com",
    //            Address = "Galle1",
    //            ContatctNo = "7120999431",
    //            CustomerImage = "image1.png",
    //            Password = "Group61",
    //            ReTypePassword = "Group61",
    //            UserRole = "Customer"
    //        });


    //        return temp;


    //    }

    //    // GET: api/<LogSignUpController>
    //    [HttpGet]
    //    public IEnumerable<CustomerModel> Get()
    //    {
    //        return CustomerModelDB;
           
    //    }

    //    // GET api/<LogSignUpController>/5
    //    [HttpGet("{id}")]
    //    public CustomerModel Get(int id)
    //    {
    //        return CustomerModelDB.Find(CustomerModel => CustomerModel.ID ==id);
    //    }

    //    // POST api/<LogSignUpController>
    //    [HttpPost]
    //    public IActionResult Customer(CustomerModel newcustomer)
    //    {
    //       // CustomerModelDB.Add(newcustomer);
    //        var customerWithSameEmail = CustomerModelDB.FirstOrDefault(m => m.Email.ToLower() == newcustomer.Email.ToLower()); //check email already exit or not
            

    //        if (customerWithSameEmail == null)
    //        {
    //            CustomerModelDB.Add(newcustomer);

    //            // Return token
    //           // var tokenString = _jwtService.GenerateJWTtoken(newcustomer);
    //            return Ok(); //new page
    //        }
    //        else
    //        {

    //            return BadRequest(); 
    //        }
            
           
    //    }

    //    // PUT api/<LogSignUpController>/5
    //    [HttpPut("{id}")]
    //    public void Put(int id, [FromBody] string value)
    //    {
    //    }

    //    // DELETE api/<LogSignUpController>/5
    //    [HttpDelete("{id}")]
    //    public void Delete(int id)
    //    {
    //    }
    //}
    //[Route("api/[controller]")]
    //[ApiController]
    //public class SellerSignUpController : ControllerBase
    //{
    //    static List<SellerModel> SellerModelDB = loadDB();

    //    public static List<SellerModel> loadDB()
    //    {
    //        List<SellerModel> temp = new List<SellerModel>();
    //        temp.Add(new SellerModel
    //        {
    //            ID = 1,
    //            Name = "Group6",
    //            Distric = "Galle",
    //            Address = "Galle,hapugale",
    //            ContatctNo ="712099943",
    //            Email = "group6@gmail.com",
    //            ShopImage = "Group6.png",
    //            Password = "Group6",
    //            ReTypePassword = "Group6",
    //            Cetogory = "Gossery",
    //            UserRole = "Seller"
    //        });

    //        temp.Add(new SellerModel
    //        {
    //            ID = 1,
    //            Name = "Group61",
    //            Distric = "Galle1",
    //            Address = "Galle1,hapugale",
    //            ContatctNo = "7120999431",
    //            Email = "group61@gmail.com",
    //            ShopImage = "Group61.png",
    //            Password = "Group61",
    //            ReTypePassword = "Group61",
    //            Cetogory = "Gossery1",
    //            UserRole = "Seller"
    //        });


    //        return temp;


    //    }

    //    // GET: api/<LogSignUpController>
    //    [HttpGet]
    //    public IEnumerable<SellerModel> Get()
    //    {
    //        return SellerModelDB;
    //    }

    //    // GET api/<LogSignUpController>/5
    //    [HttpGet("{id}")]
    //    public string Get(int id)
    //    {
    //        return "value";
    //    }

    //    // POST api/<LogSignUpController>
    //    [HttpPost]
    //    public string Seller(SellerModel newseller)
    //    {
    //        // CustomerModelDB.Add(newcustomer);
    //        var SellerWithSameEmail = SellerModelDB.FirstOrDefault(m => m.Email.ToLower() == newseller.Email.ToLower()); //check email already exit or not


    //        if (SellerWithSameEmail == null)
    //        {
    //            SellerModelDB.Add(newseller);


    //            return "Done registered "; //new page
    //        }
    //        else
    //        {

    //            return "this Email Already Exist";
    //        }


    //    }

    //    // PUT api/<LogSignUpController>/5
    //    [HttpPut("{id}")]
    //    public void Put(int id, [FromBody] string value)
    //    {
    //    }

    //    // DELETE api/<LogSignUpController>/5
    //    [HttpDelete("{id}")]
    //    public void Delete(int id)
    //    {
    //    }
    //}
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly IConfiguration _config; // To read from the config file
        private IJWTService _jwtService;

        static List<LoginModel> LogDB = loadDB();

        public LogController(IConfiguration config, IJWTService jwtservice)
        {
            _config = config;
            _jwtService = jwtservice;
        }
        public static List<LoginModel> loadDB()
        {
            List<LoginModel> temp = new List<LoginModel>();
            temp.Add(new LoginModel
            {
               
                Email = "hroup6@gmail.com",
                Password = "Group6",
                
            });

            temp.Add(new LoginModel
            {
                
                Email = "group6@gmail.com",
                Password = "Group61",
               
            });


            return temp;


        }

        // GET: api/<LogSignUpController>
        //[HttpGet]
        //public IEnumerable<LoginModel> Get()
        //{
        //    return LogDB;
        //}

        [HttpGet]
        public string GetText()
        {
            return "works";
        }

        // GET api/<LogSignUpController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LogSignUpController>
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginModel login)
        {
            try
            {
                // CustomerModelDB.Add(newcustomer);
                var CheckEmail = LogDB.FirstOrDefault(m => m.Email.ToLower() == login.Email.ToLower()); //check email already exit or not
                var CheckPasswerd = LogDB.FirstOrDefault(m => m.Password == login.Password);

                if (CheckEmail == null | CheckPasswerd == null)
                {
                    return BadRequest();
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

        // PUT api/<LogSignUpController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LogSignUpController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
