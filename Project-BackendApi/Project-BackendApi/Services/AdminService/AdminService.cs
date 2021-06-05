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
        public List<string> GetData() 
        {
            // All the data needded to be displayed in the dashboard. (No users, NO cus, No sellers)
            // public List<string> DataList = new List<string>();


            // _db.
            return null;
              
        }

        public Task DeleteUser(int UserId, string UserRole) { return null; }
    }
}
