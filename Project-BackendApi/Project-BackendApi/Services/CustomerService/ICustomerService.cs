using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.Services.CustomerService
{
    public interface ICustomerService
    {
        public List<SellerModel> GetAllShpos();

        public List<ProductModel> GetAllProducts();

        public List<SellerModel> GetByCetogory(string category);

        float Calculate(float price, int quntity, string dicount);
        public List<SellerModel> ProductAddToCart();
        public List<SellerModel> PlaceOrder();
        public Task PayService();
        
    }
}
