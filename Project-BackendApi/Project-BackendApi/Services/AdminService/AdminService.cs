using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_BackendApi.DATA;

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
            data.Append(_db.CustomerModels.ToList().Count());
            data.Append(_db.SellerModels.ToList().Count());

            var list = new List<int>(data);

            return list;
              
        }

        public async Task DeleteUser(int UserId, string UserRole) 
        {
            // Deletes user from the database;
            if (UserRole == "Customer")
            {
                var customerModel = await _db.CustomerModels.FindAsync(UserId);
                _db.CustomerModels.Remove(customerModel);
                await _db.SaveChangesAsync();
            }
            else if (UserRole == "Seller")
            {
                var sellerModel = await _db.SellerModels.FindAsync(UserId);
                _db.SellerModels.Remove(sellerModel);
                await _db.SaveChangesAsync();
            }
        }
    }
}
