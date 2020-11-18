using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project_BackendApi.Models;

namespace Project_BackendApi.Controllers
{
    public class CustomerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        // dbContext is DB class in this project. but still not create
        // CustomerModels is  customer data table name
        public ActionResult Create(CustomerModel model)
        {
            var customerWithSameEmail = dbContext.CustomerModels.Where(m => m.Email == model.Email); //check email already exit or not
            if (ModelState.IsValid)
            {
                if (customerWithSameEmail == null)
                {
                    dbContext.CustomerModels.Add(model);
                    dbContext.SaveChanges();


                    TempData["ErrorMessage"] = "Registration Is Success";
                    return View(); //new page
                }
                else
                {
                    ViewBag.Message = "User with this Email Already Exist";
                    return View();  // in this page same
                }
            }

            else
            {
                return View(); // in this page same
            }
        }
    }
}
