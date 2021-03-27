using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using Project_BackendApi.Services.CustomerService;
using Project_BackendApi.Services.ImageService;

namespace Project_BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerModelsController : ControllerBase
    {
        

        private ICustomerService _customerService;
        private readonly MarketplaceDB _context;
        private IImageService _iimageService;


        public CustomerModelsController(ICustomerService customerService, MarketplaceDB context, IImageService imageService )
        {
            _context = context;
            _customerService = customerService;
           _iimageService = imageService; 
        }

        //all products
        // GET: api/CustomerModels
        [HttpGet("products")]
        public List<ProductModel> GetAllProducts()
        {
            
            return _customerService.GetAllProducts();
        }

        //all shops
        [HttpGet("shops")]
        public List<SellerModel> GetAllShpos()
        {

            return _customerService.GetAllShpos();
        }

        //shops filter by category
        [Route("category/{category}")]
        [HttpGet()]
        public List<SellerModel>  GetSellerModels(string category)
        {
            try
            { return _customerService.GetByCetogory(category);}

            catch (Exception error) {throw error;}
        }

        // Get Sellers by Id
        [HttpGet("shops/{id}")]
        public async Task<ActionResult<SellerModel>> GetSellerById(int id)
        {
            var seller = await _context.SellerModels.FindAsync(id);

            if (seller == null)
            {
                return NotFound();
            }

            return seller;
        }

        // Get seller's product
        //[HttpGet("shops/products/{sellerId}")]
        //public List<ProductModel> GetProductsOfSeller(int sellerId)
        //{
        //    try
        //    {
        //        return _customerService.GetSellerProducts(sellerId);
        //    }
        //    catch (Exception ex) { throw ex;}
        //}
        [HttpGet("shops/products/{sellerId}")]
        public async Task<ActionResult<IEnumerable<ProductModel>>> GetProductsOfSeller(int sellerId)
        {
            return await _context.ProductModels.Where(x => x.ShopProductId == sellerId).Select(x => new ProductModel()
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

        [HttpPost("Order")]
        public ActionResult Calculation([FromBody] ProductModel OrderProduct)
        {
            var price = OrderProduct.Price;
            var quntity = OrderProduct.Quantity;
            var dicount = OrderProduct.Discount;
            var subTotal =  _customerService.Calculate(price, quntity, dicount);
            return Ok("YOur Total amount is =  "+subTotal+ " LKR ");
        }


        [HttpPost("UploadFile")]

        
        // GET: api/CustomerModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerModel>> GetCustomerModel(int id)
        {
            var customerModel = await _context.CustomerModels.FindAsync(id);

            if (customerModel == null)
            {
                return NotFound();
            }

            return customerModel;
        }

        // PUT: api/CustomerModels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerModel(int id, CustomerModel customerModel)
        {
            if (id != customerModel.CustomerId)
            {
                return BadRequest();
            }

            if(customerModel.ImageData != null)
            {
                _iimageService.DeleteImage(customerModel.CustomerImage);
                customerModel.CustomerImage = await _iimageService.SaveImage(customerModel.ImageData);
            }
            _context.Entry(customerModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CustomerModels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CustomerModel>> PostCustomerModel([FromForm] CustomerModel customerModel)
        {
            customerModel.CustomerImage = await _iimageService.SaveImage(customerModel.ImageData);
            _context.CustomerModels.Add(customerModel);
            await _context.SaveChangesAsync();
            return StatusCode(201);
        }

        // DELETE: api/CustomerModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CustomerModel>> DeleteCustomerModel(int id)
        {
            var customerModel = await _context.CustomerModels.FindAsync(id);
            if (customerModel == null)
            {
                return NotFound();
            }
            _iimageService.DeleteImage(customerModel.CustomerImage);
            _context.CustomerModels.Remove(customerModel);
            await _context.SaveChangesAsync();

            return customerModel;
        }

        private bool CustomerModelExists(int id)
        {
            return _context.CustomerModels.Any(e => e.CustomerId == id);
        }



        [HttpPost("cart")]
        
        public async Task<ActionResult> AddNewCart([FromBody] cartModel newCart)
        {

            if (newCart == null)

                return BadRequest();

            try
            {
               _context.cartModels.Add(newCart);
                await _context.SaveChangesAsync();
                return Ok($"Added cart {newCart.itemsPrice} to the database");
            }

            catch (Exception ex) { throw ex; }
        }

        [HttpGet("cart")]
        public List<cartModel> GetAllCarts()
        {

            return _context.cartModels.ToList();
        }

    }
}
