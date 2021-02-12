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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Write Fluent API configurations here

            //Property Configurations
            base.OnModelCreating(modelBuilder);



            modelBuilder.Entity<ProductModel>()
            .HasOne<SellerModel>(s => s.SellerModel)
            .WithMany(g => g.ProductModels)
            .HasForeignKey(s => s.ShopProductId);
            


            modelBuilder.Entity<ProductModel>()
           .HasOne<CategoryModel>(s => s.CategoryModel)
           .WithMany(g => g.ProductModels)
           .HasForeignKey(s => s.CategoryProductId);


            modelBuilder.Entity<OrderDetailsModel>()
           .HasOne<ProductModel>(s => s.ProductModel)
           .WithMany(g => g.OrderDetailsModels)
           .HasForeignKey(s => s.ProductOrderId);


            modelBuilder.Entity<AdminModel>()
           .HasOne<ReportModel>(s => s.ReportModel)
           .WithMany(g => g.AdminModels)
           .HasForeignKey(s => s.ReportAdminId);




            modelBuilder.Entity<CustomerOrderDetailsModel>().HasKey(sc => new { sc.OrderDetailsId, sc.CustomerId });

            modelBuilder.Entity<CustomerOrderDetailsModel>()
                .HasOne<CustomerModel>(sc => sc.CustomerModel)
                .WithMany(s => s.CustomerOrderDetailsModels)
                .HasForeignKey(sc => sc.CustomerId);


            modelBuilder.Entity<CustomerOrderDetailsModel>()
                .HasOne<OrderDetailsModel>(sc => sc.OrderDetailsModel)
                .WithMany(s => s.CustomerOrderDetailsModels)
                .HasForeignKey(sc => sc.OrderDetailsId);



            modelBuilder.Entity<CuStomerReportModel>().HasKey(sc => new { sc.ReportId, sc.CustomerId });

            modelBuilder.Entity<CuStomerReportModel>()
                .HasOne<CustomerModel>(sc => sc.CustomerModel)
                .WithMany(s => s.CuStomerReportModels)
                .HasForeignKey(sc => sc.CustomerId);


            modelBuilder.Entity<CuStomerReportModel>()
                .HasOne<ReportModel>(sc => sc.ReportModel)
                .WithMany(s => s.CuStomerReportModels)
                .HasForeignKey(sc => sc.ReportId);




            modelBuilder.Entity<ProductCustomerModel>().HasKey(sc => new { sc.CustomerId, sc.ProductId });

            modelBuilder.Entity<ProductCustomerModel>()
                .HasOne<ProductModel>(sc => sc.ProductModel)
                .WithMany(s => s.ProductCustomerModels)
                .HasForeignKey(sc => sc.ProductId);


            modelBuilder.Entity<ProductCustomerModel>()
                .HasOne<CustomerModel>(sc => sc.CustomerModel)
                .WithMany(s => s.ProductCustomerModels)
                .HasForeignKey(sc => sc.CustomerId);





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
