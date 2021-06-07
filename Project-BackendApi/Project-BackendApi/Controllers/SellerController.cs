using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using Project_BackendApi.Services.SellerService;
using Microsoft.EntityFrameworkCore;
using Project_BackendApi.Services.ImageService;

// Make this protected 

namespace Project_BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private ISellerService _sellerService;

        private readonly MarketplaceDB _db;
        private IImageService _iimageService;
        public SellerController(ISellerService sellerService, MarketplaceDB db, IImageService imageService)
        {
            _db = db;
            _sellerService = sellerService;
            _iimageService = imageService;

        }

        [HttpGet("sellers/products/{sellerId}")]
        //[Authorize] //- Uncomment later (Very Important)
        public async Task<ActionResult<IEnumerable<ProductModel>>> GetAllProducts(int sellerId)
        {
            return await _db.ProductModels.Where(x => x.ShopProductId == sellerId).Select(x => new ProductModel()
            {
                ProductId = x.ProductId,
                Title = x.Title,
                Price = x.Price,
                AvailabeAmount = x.AvailabeAmount,
                Image = x.Image,
                Discount = x.Discount,
                Size = x.Size,
                Quantity = x.Quantity,
                ImageSource = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Image),
                ShopProductId = x.ShopProductId
            })
              .ToListAsync(); ;
        }

        [HttpPost]
        //[Authorize(Policy = Policies.Seller)]
        public async Task<ActionResult> AddNewProduct([FromForm] ProductModel newProduct)
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




        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduts(int id, [FromForm] ProductModel newProduct)
        {
            if (id != newProduct.ProductId)
            {
                return BadRequest();
            }

            if (newProduct.ImageData != null)
            {
                _iimageService.DeleteImage(newProduct.Image);
                newProduct.Image = await _iimageService.SaveImage(newProduct.ImageData);
            }

            _db.Entry(newProduct).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException error)
            {
                throw error;
            }

            return NoContent();
        }


        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductModel>> DeleteProduct(int id)
        {
            var DeleteProduct = await _db.ProductModels.FindAsync(id);
            if (DeleteProduct == null)
            {
                return NotFound();
            }
            _iimageService.DeleteImage(DeleteProduct.Image);
            _db.ProductModels.Remove(DeleteProduct);
            await _db.SaveChangesAsync();

            return DeleteProduct;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SellerModel>> GetSeller(int id)
        {
            var customerModel = await _db.SellerModels.FindAsync(id);

            if (customerModel == null)
            {
                return NotFound();
            }

            return customerModel;
        }

        [HttpGet("cartItems")]
        public List<cartModel> GetAllCart() // show all products *
        {
            return _db.cartModels.ToList();
        }
        [HttpGet("cartItems/items")]

        public List<OrderProductsModel> GetAllOrderList() // show all products *
        {
            return _db.OrderProductsModels.ToList();
        }


    }
}
