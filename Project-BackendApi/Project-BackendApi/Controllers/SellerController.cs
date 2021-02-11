using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using Project_BackendApi.Services.SellerService;

// Make this protected 

namespace Project_BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private ISellerService _sellerService;

        private readonly MarketplaceDB _db;
        public SellerController(ISellerService sellerService, MarketplaceDB db)
        {
            _db = db;
            _sellerService = sellerService;
        }

        [HttpGet]
       // [Authorize(Policy = Policies.Seller)] - Uncomment later (Very Important)
        public List<ProductModel> GetAllProducts()
        {
            return _sellerService.GetAllProducts();
        }

        [HttpPost]
       // [Authorize(Policy = Policies.Seller)]
        public async Task<IActionResult> AddNewProduct(ProductModel newProduct)
        {
            if (newProduct == null)
                return BadRequest();

            try
            {
                await _sellerService.AddProducts(newProduct);
                return Ok($"Added product {newProduct.Title} to the database");
            }

            catch (Exception ex) { throw ex; }
        }
    }
}
