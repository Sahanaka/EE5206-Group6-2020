﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Project_BackendApi.DATA;

namespace Project_BackendApi.Migrations
{
    [DbContext(typeof(MarketplaceDB))]
    [Migration("20210327085749_bool4")]
    partial class bool4
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Project_BackendApi.Models.AdminModel", b =>
                {
                    b.Property<int>("AdminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContactNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReTypePassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ReportAdminId")
                        .HasColumnType("int");

                    b.HasKey("AdminId");

                    b.HasIndex("ReportAdminId");

                    b.ToTable("AdminModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CategoryModel", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("SubCategory")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CategoryId");

                    b.ToTable("CategoryModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CuStomerReportModel", b =>
                {
                    b.Property<int>("ReportId")
                        .HasColumnType("int");

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.HasKey("ReportId", "CustomerId");

                    b.HasIndex("CustomerId");

                    b.ToTable("CuStomerReportModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CustomerModel", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contatct_No")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReTypePassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CustomerId");

                    b.ToTable("CustomerModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CustomerOrderDetailsModel", b =>
                {
                    b.Property<int>("OrderDetailsId")
                        .HasColumnType("int");

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.HasKey("OrderDetailsId", "CustomerId");

                    b.HasIndex("CustomerId");

                    b.ToTable("CustomerOrderDetailsModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.OrderDetailsModel", b =>
                {
                    b.Property<int>("OrderDetailsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProductOrderId")
                        .HasColumnType("int");

                    b.HasKey("OrderDetailsId");

                    b.HasIndex("ProductOrderId");

                    b.ToTable("OrderDetailsModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.ProductCustomerModel", b =>
                {
                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.HasKey("CustomerId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("ProductCustomerModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.ProductModel", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("AvailabeAmount")
                        .HasColumnType("int");

                    b.Property<int>("CategoryProductId")
                        .HasColumnType("int");

                    b.Property<string>("Discount")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("ShopProductId")
                        .HasColumnType("int");

                    b.Property<string>("Size")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProductId");

                    b.HasIndex("CategoryProductId");

                    b.HasIndex("ShopProductId");

                    b.ToTable("ProductModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.ReportModel", b =>
                {
                    b.Property<int>("ReportId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ReportId");

                    b.ToTable("ReportModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.SellerCustomerModel", b =>
                {
                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<int>("SellerId")
                        .HasColumnType("int");

                    b.HasKey("CustomerId", "SellerId");

                    b.HasIndex("SellerId");

                    b.ToTable("SellerCustomerModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.SellerModel", b =>
                {
                    b.Property<int>("SellerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cetogory")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ContatctNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Distric")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReTypePassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShopImage")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SellerId");

                    b.ToTable("SellerModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.cartModel", b =>
                {
                    b.Property<int>("CartyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<bool>("IsAccepted")
                        .HasColumnType("bit");

                    b.Property<string>("cartItems")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("itemsPrice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("shippingPrice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("taxPrice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("totalPrice")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CartyId");

                    b.ToTable("cartModels");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Project_BackendApi.Models.AdminModel", b =>
                {
                    b.HasOne("Project_BackendApi.Models.ReportModel", "ReportModel")
                        .WithMany("AdminModels")
                        .HasForeignKey("ReportAdminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ReportModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CuStomerReportModel", b =>
                {
                    b.HasOne("Project_BackendApi.Models.CustomerModel", "CustomerModel")
                        .WithMany("CuStomerReportModels")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_BackendApi.Models.ReportModel", "ReportModel")
                        .WithMany("CuStomerReportModels")
                        .HasForeignKey("ReportId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CustomerModel");

                    b.Navigation("ReportModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CustomerOrderDetailsModel", b =>
                {
                    b.HasOne("Project_BackendApi.Models.CustomerModel", "CustomerModel")
                        .WithMany("CustomerOrderDetailsModels")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_BackendApi.Models.OrderDetailsModel", "OrderDetailsModel")
                        .WithMany("CustomerOrderDetailsModels")
                        .HasForeignKey("OrderDetailsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CustomerModel");

                    b.Navigation("OrderDetailsModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.OrderDetailsModel", b =>
                {
                    b.HasOne("Project_BackendApi.Models.ProductModel", "ProductModel")
                        .WithMany("OrderDetailsModels")
                        .HasForeignKey("ProductOrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ProductModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.ProductCustomerModel", b =>
                {
                    b.HasOne("Project_BackendApi.Models.CustomerModel", "CustomerModel")
                        .WithMany("ProductCustomerModels")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_BackendApi.Models.ProductModel", "ProductModel")
                        .WithMany("ProductCustomerModels")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CustomerModel");

                    b.Navigation("ProductModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.ProductModel", b =>
                {
                    b.HasOne("Project_BackendApi.Models.CategoryModel", "CategoryModel")
                        .WithMany("ProductModels")
                        .HasForeignKey("CategoryProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_BackendApi.Models.SellerModel", "SellerModel")
                        .WithMany("ProductModels")
                        .HasForeignKey("ShopProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CategoryModel");

                    b.Navigation("SellerModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.SellerCustomerModel", b =>
                {
                    b.HasOne("Project_BackendApi.Models.CustomerModel", "CustomerModel")
                        .WithMany("SellerCustomerModels")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_BackendApi.Models.SellerModel", "SellerModel")
                        .WithMany("SellerCustomerModels")
                        .HasForeignKey("SellerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CustomerModel");

                    b.Navigation("SellerModel");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CategoryModel", b =>
                {
                    b.Navigation("ProductModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.CustomerModel", b =>
                {
                    b.Navigation("CustomerOrderDetailsModels");

                    b.Navigation("CuStomerReportModels");

                    b.Navigation("ProductCustomerModels");

                    b.Navigation("SellerCustomerModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.OrderDetailsModel", b =>
                {
                    b.Navigation("CustomerOrderDetailsModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.ProductModel", b =>
                {
                    b.Navigation("OrderDetailsModels");

                    b.Navigation("ProductCustomerModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.ReportModel", b =>
                {
                    b.Navigation("AdminModels");

                    b.Navigation("CuStomerReportModels");
                });

            modelBuilder.Entity("Project_BackendApi.Models.SellerModel", b =>
                {
                    b.Navigation("ProductModels");

                    b.Navigation("SellerCustomerModels");
                });
#pragma warning restore 612, 618
        }
    }
}
