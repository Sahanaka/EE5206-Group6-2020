using Microsoft.AspNetCore.Mvc;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.Services.SellerService
{
    public class SellerService : ISellerService
    {
        private readonly MarketplaceDB _db;

        public SellerService(MarketplaceDB db)
        {
            _db = db;
        }

        public List<ProductModel> GetAllProducts()
        {
            return _db.ProductModels.ToList();
        }

        public async Task<ProductModel> AddProducts(ProductModel newProduct)
        {
            try
            {
                _db.ProductModels.Add(newProduct);
                await _db.SaveChangesAsync();
                return newProduct;
            }
            catch (Exception ex) { throw ex;  }
        }

        public async Task<ProductModel> UpdateProduts(ProductModel updatedproduct)
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
       
        public async Task ProcessOrder(OrderDetailsModel order)
        {
            // This method process the order and accepts it or declines it. Also special discounts and other rates are processed here
            // If a order is accepted then it is saved in the db

            // Replace with correct logic later
            _db.OrderDetailsModels.Add(order);
            await _db.SaveChangesAsync();
        }

        public async Task PayService()
        {
            // Method which is resposible for paying the service
            // Has to be researched and then implement
        }
    }
}
