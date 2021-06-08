using Project_BackendApi.DATA;
using Project_BackendApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace Project_BackendApi.Services.CustomerService
{
    public class CustomerService : ICustomerService
    {

        private readonly MarketplaceDB _db;

        public CustomerService(MarketplaceDB db)
        {
            _db = db;
        }

        public List<ProductModel> GetAllProducts() // show all products *
        { 

            return _db.ProductModels.ToList();
        }

        //public List<ProductModel> GetSellerProducts(int sellerId)
        //{
        //    try
        //    { return _db.ProductModels.Where(x => x.ShopProductId == sellerId).ToList(); }
        //    catch (Exception ex) { throw ex; }
        //}

        public List<SellerModel> GetAllShpos() // show list of shops *
        {
            
            return _db.SellerModels.ToList();
        }

        public List<SellerModel> GetByCetogory(string category) // Fitlter by cateogry 
        {
            try{return _db.SellerModels.Where(SellerModel => SellerModel.Cetogory == category).ToList();}
            catch (Exception error) {throw error;}
        }

        public float Calculate(float price, int quntity, string dicount) //Price calculate
        {
            if (dicount == null)
            {
                var subTotal = price * quntity;
                return subTotal;
            }
            else
            {
                var totalPrice = price * quntity;
                var disc = totalPrice * float.Parse(dicount); 
                var subTotal = totalPrice - disc;
                return subTotal;
            }
        }

        
        public Task PayService()
        {
            throw new NotImplementedException(); // products payments 
        }
        public List<SellerModel> PlaceOrder() // create new order using shop cart or ByItNow
        {
            throw new NotImplementedException();
        }

        public List<SellerModel> ProductAddToCart() // selected product add to cart 
        {
            throw new NotImplementedException();
        }



        
    }
}
