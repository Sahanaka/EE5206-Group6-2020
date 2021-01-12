using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_BackendApi.Models;

namespace Project_BackendApi.Services.JWTService
{
    public interface IJWTService
    {
        public string GenerateJWTtoken(LoginModel user);
    }
}
