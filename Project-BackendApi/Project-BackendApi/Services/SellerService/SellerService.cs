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

        public async Task UpdateProduts()
        {

        }

        public async Task RemoveProducts()
        {

        }

        public async Task ProcessOrder()
        {

        }

        public async Task PayService()
        {

        }
    }
}
