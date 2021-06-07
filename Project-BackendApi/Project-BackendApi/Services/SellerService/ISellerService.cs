using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project_BackendApi.Models;

namespace Project_BackendApi.Services.SellerService
{
    public interface ISellerService
    {
        // service widiyta plwn nam hadanna. man nikanma controller eke method tikata call kare.



        //public Task<ActionResult<IEnumerable<ProductModel>>> GetAllProducts(int sellerId); // List out all the products

        public Task<ActionResult<ProductModel>> AddProducts([FromBody] ProductModel newProduct); // Add new products to store

        public Task<ProductModel> UpdateProduts(ProductModel updatedProduct); // Update existing products : price changes, quantity changes etc

        public Task<ProductModel> RemoveProducts(int Id); 

        public Task ProcessOrder(OrderProductsModel order); // Accept or decline an order

        public Task PayService();

       
    }
}
