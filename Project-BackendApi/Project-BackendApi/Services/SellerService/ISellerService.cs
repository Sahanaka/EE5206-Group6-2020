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
        public List<ProductModel> GetAllProducts(); // List out all the products

        public Task<ProductModel> AddProducts(ProductModel newProduct); // Add new products to store

        public Task UpdateProduts(); // Update existing products : price changes, quantity changes etc

        public Task RemoveProducts(); 

        public Task ProcessOrder(); // Accept or decline an order

        public Task PayService(); 

    }
}
