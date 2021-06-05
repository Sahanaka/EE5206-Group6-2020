using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.Services.AdminService
{
    public interface IAdminService
    {
        public List<string> GetData();

        public Task DeleteUser(int UserId, string UserRole);
    }
}
