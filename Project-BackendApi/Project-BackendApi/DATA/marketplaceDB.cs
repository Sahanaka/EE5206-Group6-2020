using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Project_BackendApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.DATA
{
    public class MarketplaceDB : IdentityDbContext
    {
        public MarketplaceDB(DbContextOptions<MarketplaceDB> options) : base(options)
        {

        }

        public DbSet<AdminModel> AdminModels { get; set; }
        public DbSet<CategoryModel> CategoryModels { get; set; }
        public DbSet<CustomerModel> CustomerModels { get; set; }
        public DbSet<OrderDetailsModel> OrderDetailsModels { get; set; }
        public DbSet<ProductModel> ProductModels { get; set; }
        public DbSet<ReportModel> ReportModels { get; set; }

        public DbSet<SellerModel> SellerModels { get; set; }
        

    }
}
