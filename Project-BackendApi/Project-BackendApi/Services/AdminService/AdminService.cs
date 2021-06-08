using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_BackendApi.DATA;
using Project_BackendApi.Models;

namespace Project_BackendApi.Services.AdminService
{
    public class AdminService : IAdminService
    {
        private readonly MarketplaceDB _db;

        public AdminService(MarketplaceDB db)
        {
            _db = db;
        }
        public List<int> GetData() 
        {
            // All the data needded to be displayed in the dashboard. (No users, NO cus, No sellers)
            int[] data = new int[3];
            data[0] = _db.CustomerModels.ToList().Count();
            data[1] = _db.SellerModels.ToList().Count();
            
            var list = new List<int>(data);
            return list;
              
        }

        public List<CustomerModel> GetCustomers()
        {
            return _db.CustomerModels.ToList();
        }

        public List<SellerModel> GetSellers()
        {
            return _db.SellerModels.ToList();
        }
    }
}
