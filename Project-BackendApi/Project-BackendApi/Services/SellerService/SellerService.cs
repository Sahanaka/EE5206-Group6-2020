using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using Microsoft.EntityFrameworkCore;
using Project_BackendApi.Services.ImageService;
using System.Security.Cryptography;
using System.Text;

namespace Project_BackendApi.Services.SellerService
{
    public class SellerService : ISellerService
    {
       
        private readonly MarketplaceDB _db;
        private IImageService _iimageService;

        public SellerService(MarketplaceDB db, IImageService imageService)
        {
            _db = db;
            _iimageService = imageService;
        }


        public async Task<ActionResult<ProductModel>> AddProducts([FromBody] ProductModel newProduct)
        {
            try
            {
                Console.WriteLine("dddddddddddddddddddd");
                newProduct.Image = await _iimageService.SaveImage(newProduct.ImageData);
                _db.ProductModels.Add(newProduct);
                await _db.SaveChangesAsync();
                return newProduct;
            }
            catch (Exception ex) {
                Console.WriteLine("dddddddddddddddddddd");

                throw ex;  
            }
        }

        public async Task<ProductModel> UpdateProduts( ProductModel updatedproduct)
        {
            try
            {
                var product = _db.ProductModels.FirstOrDefault(item => item.ProductId == updatedproduct.ProductId);
                product = updatedproduct;
                await _db.SaveChangesAsync();

                return product;
            }
            catch (Exception ex) { throw ex; }
        }

        public async Task<ProductModel> RemoveProducts(int Id)
        {
            try
            {
                var product = _db.ProductModels.FirstOrDefault(item => item.ProductId == Id);
                _db.ProductModels.Remove(product);
                await _db.SaveChangesAsync();

                return product;
            }
            catch (Exception ex) { throw ex; }
        }
       
        public async Task ProcessOrder(OrderProductsModel order)
        {
            // This method process the order and accepts it or declines it. Also special discounts and other rates are processed here
            // If a order is accepted then it is saved in the db

            // Replace with correct logic later
            _db.OrderProductsModels.Add(order);
            await _db.SaveChangesAsync();
        }

        public async Task PayService()
        {
            // Method which is resposible for paying the service
            // Has to be researched and then implement

        }


    }
}
