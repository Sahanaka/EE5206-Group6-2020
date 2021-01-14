using Microsoft.EntityFrameworkCore;
using Project_BackendApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.DATA
{
    public class MarketplaceDB:DbContext
    {
        public MarketplaceDB(DbContextOptions<MarketplaceDB> options) : base(options)
        {

        }

        
        public DbSet<CustomerModel> CustomerModels { get; set; }
        public DbSet<LoginModel> LoginModels { get; set; }
        public DbSet<Policies> Policiess { get; set; }
        public DbSet<ProductModel> ProductModels { get; set; }
        public DbSet<SellerModel> SellerModels { get; set; }

    }
}
