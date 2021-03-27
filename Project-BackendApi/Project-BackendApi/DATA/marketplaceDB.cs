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
        public DbSet<SellerCustomerModel> SellerCustomerModels { get; set; }
        public DbSet<SellerCustomerModel> ProductCustomerModels { get; set; }
        public DbSet<SellerCustomerModel> CuStomerReportModels { get; set; }
        public DbSet<SellerCustomerModel> CustomerOrderDetailsModels { get; set; }
        public DbSet<cartModel> cartModels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Write Fluent API configurations here

            //Property Configurations
            base.OnModelCreating(modelBuilder);



            modelBuilder.Entity<ProductModel>()
            .HasOne<SellerModel>(s => s.SellerModel)
            .WithMany(p => p.ProductModels)
            .HasForeignKey(s => s.ShopProductId);
            


            modelBuilder.Entity<ProductModel>()
           .HasOne<CategoryModel>(s => s.CategoryModel)
           .WithMany(p => p.ProductModels)
           .HasForeignKey(c => c.CategoryProductId);


            modelBuilder.Entity<OrderDetailsModel>()
           .HasOne<ProductModel>(p => p.ProductModel)
           .WithMany(o => o.OrderDetailsModels)
           .HasForeignKey(p => p.ProductOrderId);


            modelBuilder.Entity<AdminModel>()
           .HasOne<ReportModel>(r => r.ReportModel)
           .WithMany(a => a.AdminModels)
           .HasForeignKey(r => r.ReportAdminId);




            modelBuilder.Entity<CustomerOrderDetailsModel>().HasKey(co => new { co.OrderDetailsId, co.CustomerId });

            modelBuilder.Entity<CustomerOrderDetailsModel>()
                .HasOne<CustomerModel>(co => co.CustomerModel)
                .WithMany(s => s.CustomerOrderDetailsModels)
                .HasForeignKey(co => co.CustomerId);


            modelBuilder.Entity<CustomerOrderDetailsModel>()
                .HasOne<OrderDetailsModel>(co => co.OrderDetailsModel)
                .WithMany(s => s.CustomerOrderDetailsModels)
                .HasForeignKey(co => co.OrderDetailsId);



            modelBuilder.Entity<CuStomerReportModel>().HasKey(cr => new { cr.ReportId, cr.CustomerId });

            modelBuilder.Entity<CuStomerReportModel>()
                .HasOne<CustomerModel>(cr => cr.CustomerModel)
                .WithMany(s => s.CuStomerReportModels)
                .HasForeignKey(cr => cr.CustomerId);


            modelBuilder.Entity<CuStomerReportModel>()
                .HasOne<ReportModel>(cr => cr.ReportModel)
                .WithMany(s => s.CuStomerReportModels)
                .HasForeignKey(cr => cr.ReportId);




            modelBuilder.Entity<ProductCustomerModel>().HasKey(pc => new { pc.CustomerId, pc.ProductId });

            modelBuilder.Entity<ProductCustomerModel>()
                .HasOne<ProductModel>(pc => pc.ProductModel)
                .WithMany(s => s.ProductCustomerModels)
                .HasForeignKey(pc => pc.ProductId);


            modelBuilder.Entity<ProductCustomerModel>()
                .HasOne<CustomerModel>(pc => pc.CustomerModel)
                .WithMany(s => s.ProductCustomerModels)
                .HasForeignKey(pc => pc.CustomerId);





            modelBuilder.Entity<SellerCustomerModel>().HasKey(sc => new { sc.CustomerId, sc.SellerId });

            modelBuilder.Entity<SellerCustomerModel>()
                .HasOne<SellerModel>(sc => sc.SellerModel)
                .WithMany(s => s.SellerCustomerModels)
                .HasForeignKey(sc => sc.SellerId);


            modelBuilder.Entity<SellerCustomerModel>()
                .HasOne<CustomerModel>(sc => sc.CustomerModel)
                .WithMany(s => s.SellerCustomerModels)
                .HasForeignKey(sc => sc.CustomerId);
        }




    }
}
