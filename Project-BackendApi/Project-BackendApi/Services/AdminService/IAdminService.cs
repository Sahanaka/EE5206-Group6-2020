using Project_BackendApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.Services.AdminService
{
    public interface IAdminService
    {
        public List<int> GetData();

        public List<CustomerModel> GetCustomers();

        public List<SellerModel> GetSellers();
    }
}
