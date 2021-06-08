using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project_BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public readonly MarketplaceDB _db;

        public CategoryController(MarketplaceDB db)
        {
            _db = db;
        }
        

        [HttpPost]
        public ActionResult AddCategory([FromBody] CategoryModel CategoryModel)
        {
            try
            {
                _db.CategoryModels.Add(CategoryModel);
                _db.SaveChanges();
                return Ok($"Added Category {CategoryModel.Title} to the database");
            }

            catch (Exception ex) { throw ex; }
            
        }
    }
}
