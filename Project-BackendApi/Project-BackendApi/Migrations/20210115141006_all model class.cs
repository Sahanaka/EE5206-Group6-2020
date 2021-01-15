using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_BackendApi.Migrations
{
    public partial class allmodelclass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "ProductModels");

            migrationBuilder.RenameColumn(
                name: "Quntity",
                table: "ProductModels",
                newName: "Quantity");

            migrationBuilder.RenameColumn(
                name: "Availabe_amount",
                table: "ProductModels",
                newName: "AvailabeAmount");

            migrationBuilder.RenameColumn(
                name: "ContatctNo",
                table: "CustomerModels",
                newName: "Contatct_No");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "ProductModels",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OrderDetailsModelID",
                table: "ProductModels",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AdminModel",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReTypePassword = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdminModel", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CategoryModel",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductModelID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryModel", x => x.ID);
                    table.ForeignKey(
                        name: "FK_CategoryModel_ProductModels_ProductModelID",
                        column: x => x.ProductModelID,
                        principalTable: "ProductModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CustomerModelProductModel",
                columns: table => new
                {
                    CustomerModelsID = table.Column<int>(type: "int", nullable: false),
                    ProductModelsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerModelProductModel", x => new { x.CustomerModelsID, x.ProductModelsID });
                    table.ForeignKey(
                        name: "FK_CustomerModelProductModel_CustomerModels_CustomerModelsID",
                        column: x => x.CustomerModelsID,
                        principalTable: "CustomerModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerModelProductModel_ProductModels_ProductModelsID",
                        column: x => x.ProductModelsID,
                        principalTable: "ProductModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderDetailsModel",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetailsModel", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ShopModel",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    District = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReTypePassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductModelID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShopModel", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ShopModel_ProductModels_ProductModelID",
                        column: x => x.ProductModelID,
                        principalTable: "ProductModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ReportModel",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adminModelID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportModel", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ReportModel_AdminModel_adminModelID",
                        column: x => x.adminModelID,
                        principalTable: "AdminModel",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CustomerModelOrderDetailsModel",
                columns: table => new
                {
                    CustomerModelsID = table.Column<int>(type: "int", nullable: false),
                    OrderDetailsModelsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerModelOrderDetailsModel", x => new { x.CustomerModelsID, x.OrderDetailsModelsID });
                    table.ForeignKey(
                        name: "FK_CustomerModelOrderDetailsModel_CustomerModels_CustomerModelsID",
                        column: x => x.CustomerModelsID,
                        principalTable: "CustomerModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerModelOrderDetailsModel_OrderDetailsModel_OrderDetailsModelsID",
                        column: x => x.OrderDetailsModelsID,
                        principalTable: "OrderDetailsModel",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CustomerModelShopModel",
                columns: table => new
                {
                    CustomerModelsID = table.Column<int>(type: "int", nullable: false),
                    ShopModelID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerModelShopModel", x => new { x.CustomerModelsID, x.ShopModelID });
                    table.ForeignKey(
                        name: "FK_CustomerModelShopModel_CustomerModels_CustomerModelsID",
                        column: x => x.CustomerModelsID,
                        principalTable: "CustomerModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerModelShopModel_ShopModel_ShopModelID",
                        column: x => x.ShopModelID,
                        principalTable: "ShopModel",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CustomerModelReportModel",
                columns: table => new
                {
                    CustomerModelsID = table.Column<int>(type: "int", nullable: false),
                    ReportModelsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerModelReportModel", x => new { x.CustomerModelsID, x.ReportModelsID });
                    table.ForeignKey(
                        name: "FK_CustomerModelReportModel_CustomerModels_CustomerModelsID",
                        column: x => x.CustomerModelsID,
                        principalTable: "CustomerModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerModelReportModel_ReportModel_ReportModelsID",
                        column: x => x.ReportModelsID,
                        principalTable: "ReportModel",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductModels_OrderDetailsModelID",
                table: "ProductModels",
                column: "OrderDetailsModelID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_CategoryModel_ProductModelID",
                table: "CategoryModel",
                column: "ProductModelID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerModelOrderDetailsModel_OrderDetailsModelsID",
                table: "CustomerModelOrderDetailsModel",
                column: "OrderDetailsModelsID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerModelProductModel_ProductModelsID",
                table: "CustomerModelProductModel",
                column: "ProductModelsID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerModelReportModel_ReportModelsID",
                table: "CustomerModelReportModel",
                column: "ReportModelsID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerModelShopModel_ShopModelID",
                table: "CustomerModelShopModel",
                column: "ShopModelID");

            migrationBuilder.CreateIndex(
                name: "IX_ReportModel_adminModelID",
                table: "ReportModel",
                column: "adminModelID");

            migrationBuilder.CreateIndex(
                name: "IX_ShopModel_ProductModelID",
                table: "ShopModel",
                column: "ProductModelID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductModels_OrderDetailsModel_OrderDetailsModelID",
                table: "ProductModels",
                column: "OrderDetailsModelID",
                principalTable: "OrderDetailsModel",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductModels_OrderDetailsModel_OrderDetailsModelID",
                table: "ProductModels");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "CategoryModel");

            migrationBuilder.DropTable(
                name: "CustomerModelOrderDetailsModel");

            migrationBuilder.DropTable(
                name: "CustomerModelProductModel");

            migrationBuilder.DropTable(
                name: "CustomerModelReportModel");

            migrationBuilder.DropTable(
                name: "CustomerModelShopModel");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "OrderDetailsModel");

            migrationBuilder.DropTable(
                name: "ReportModel");

            migrationBuilder.DropTable(
                name: "ShopModel");

            migrationBuilder.DropTable(
                name: "AdminModel");

            migrationBuilder.DropIndex(
                name: "IX_ProductModels_OrderDetailsModelID",
                table: "ProductModels");

            migrationBuilder.DropColumn(
                name: "OrderDetailsModelID",
                table: "ProductModels");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "ProductModels",
                newName: "Quntity");

            migrationBuilder.RenameColumn(
                name: "AvailabeAmount",
                table: "ProductModels",
                newName: "Availabe_amount");

            migrationBuilder.RenameColumn(
                name: "Contatct_No",
                table: "CustomerModels",
                newName: "ContatctNo");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "ProductModels",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "ProductModels",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
