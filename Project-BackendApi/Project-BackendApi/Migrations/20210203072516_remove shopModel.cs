using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_BackendApi.Migrations
{
    public partial class removeshopModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CategoryModel_ProductModels_ProductModelID",
                table: "CategoryModel");

            migrationBuilder.DropForeignKey(
                name: "FK_CustomerModelOrderDetailsModel_OrderDetailsModel_OrderDetailsModelsID",
                table: "CustomerModelOrderDetailsModel");

            migrationBuilder.DropForeignKey(
                name: "FK_CustomerModelReportModel_ReportModel_ReportModelsID",
                table: "CustomerModelReportModel");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductModels_OrderDetailsModel_OrderDetailsModelID",
                table: "ProductModels");

            migrationBuilder.DropForeignKey(
                name: "FK_ReportModel_AdminModel_adminModelID",
                table: "ReportModel");

            migrationBuilder.DropTable(
                name: "CustomerModelShopModel");

            migrationBuilder.DropTable(
                name: "LoginModels");

            migrationBuilder.DropTable(
                name: "Policiess");

            migrationBuilder.DropTable(
                name: "ShopModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReportModel",
                table: "ReportModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderDetailsModel",
                table: "OrderDetailsModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryModel",
                table: "CategoryModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AdminModel",
                table: "AdminModel");

            migrationBuilder.RenameTable(
                name: "ReportModel",
                newName: "ReportModels");

            migrationBuilder.RenameTable(
                name: "OrderDetailsModel",
                newName: "OrderDetailsModels");

            migrationBuilder.RenameTable(
                name: "CategoryModel",
                newName: "CategoryModels");

            migrationBuilder.RenameTable(
                name: "AdminModel",
                newName: "AdminModels");

            migrationBuilder.RenameColumn(
                name: "adminModelID",
                table: "ReportModels",
                newName: "AdminModelID");

            migrationBuilder.RenameIndex(
                name: "IX_ReportModel_adminModelID",
                table: "ReportModels",
                newName: "IX_ReportModels_AdminModelID");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryModel_ProductModelID",
                table: "CategoryModels",
                newName: "IX_CategoryModels_ProductModelID");

            migrationBuilder.AddColumn<int>(
                name: "ProductModelID",
                table: "SellerModels",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReportModels",
                table: "ReportModels",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderDetailsModels",
                table: "OrderDetailsModels",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryModels",
                table: "CategoryModels",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdminModels",
                table: "AdminModels",
                column: "ID");

            migrationBuilder.CreateTable(
                name: "CustomerModelSellerModel",
                columns: table => new
                {
                    CustomerModelsID = table.Column<int>(type: "int", nullable: false),
                    SellerModelsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerModelSellerModel", x => new { x.CustomerModelsID, x.SellerModelsID });
                    table.ForeignKey(
                        name: "FK_CustomerModelSellerModel_CustomerModels_CustomerModelsID",
                        column: x => x.CustomerModelsID,
                        principalTable: "CustomerModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerModelSellerModel_SellerModels_SellerModelsID",
                        column: x => x.SellerModelsID,
                        principalTable: "SellerModels",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SellerModels_ProductModelID",
                table: "SellerModels",
                column: "ProductModelID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerModelSellerModel_SellerModelsID",
                table: "CustomerModelSellerModel",
                column: "SellerModelsID");

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryModels_ProductModels_ProductModelID",
                table: "CategoryModels",
                column: "ProductModelID",
                principalTable: "ProductModels",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerModelOrderDetailsModel_OrderDetailsModels_OrderDetailsModelsID",
                table: "CustomerModelOrderDetailsModel",
                column: "OrderDetailsModelsID",
                principalTable: "OrderDetailsModels",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerModelReportModel_ReportModels_ReportModelsID",
                table: "CustomerModelReportModel",
                column: "ReportModelsID",
                principalTable: "ReportModels",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductModels_OrderDetailsModels_OrderDetailsModelID",
                table: "ProductModels",
                column: "OrderDetailsModelID",
                principalTable: "OrderDetailsModels",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ReportModels_AdminModels_AdminModelID",
                table: "ReportModels",
                column: "AdminModelID",
                principalTable: "AdminModels",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SellerModels_ProductModels_ProductModelID",
                table: "SellerModels",
                column: "ProductModelID",
                principalTable: "ProductModels",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CategoryModels_ProductModels_ProductModelID",
                table: "CategoryModels");

            migrationBuilder.DropForeignKey(
                name: "FK_CustomerModelOrderDetailsModel_OrderDetailsModels_OrderDetailsModelsID",
                table: "CustomerModelOrderDetailsModel");

            migrationBuilder.DropForeignKey(
                name: "FK_CustomerModelReportModel_ReportModels_ReportModelsID",
                table: "CustomerModelReportModel");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductModels_OrderDetailsModels_OrderDetailsModelID",
                table: "ProductModels");

            migrationBuilder.DropForeignKey(
                name: "FK_ReportModels_AdminModels_AdminModelID",
                table: "ReportModels");

            migrationBuilder.DropForeignKey(
                name: "FK_SellerModels_ProductModels_ProductModelID",
                table: "SellerModels");

            migrationBuilder.DropTable(
                name: "CustomerModelSellerModel");

            migrationBuilder.DropIndex(
                name: "IX_SellerModels_ProductModelID",
                table: "SellerModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReportModels",
                table: "ReportModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderDetailsModels",
                table: "OrderDetailsModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryModels",
                table: "CategoryModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AdminModels",
                table: "AdminModels");

            migrationBuilder.DropColumn(
                name: "ProductModelID",
                table: "SellerModels");

            migrationBuilder.RenameTable(
                name: "ReportModels",
                newName: "ReportModel");

            migrationBuilder.RenameTable(
                name: "OrderDetailsModels",
                newName: "OrderDetailsModel");

            migrationBuilder.RenameTable(
                name: "CategoryModels",
                newName: "CategoryModel");

            migrationBuilder.RenameTable(
                name: "AdminModels",
                newName: "AdminModel");

            migrationBuilder.RenameColumn(
                name: "AdminModelID",
                table: "ReportModel",
                newName: "adminModelID");

            migrationBuilder.RenameIndex(
                name: "IX_ReportModels_AdminModelID",
                table: "ReportModel",
                newName: "IX_ReportModel_adminModelID");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryModels_ProductModelID",
                table: "CategoryModel",
                newName: "IX_CategoryModel_ProductModelID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReportModel",
                table: "ReportModel",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderDetailsModel",
                table: "OrderDetailsModel",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryModel",
                table: "CategoryModel",
                column: "ID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdminModel",
                table: "AdminModel",
                column: "ID");

            migrationBuilder.CreateTable(
                name: "LoginModels",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoginModels", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Policiess",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Policiess", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ShopModel",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    District = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProductModelID = table.Column<int>(type: "int", nullable: true),
                    ReTypePassword = table.Column<string>(type: "nvarchar(max)", nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_CustomerModelShopModel_ShopModelID",
                table: "CustomerModelShopModel",
                column: "ShopModelID");

            migrationBuilder.CreateIndex(
                name: "IX_ShopModel_ProductModelID",
                table: "ShopModel",
                column: "ProductModelID");

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryModel_ProductModels_ProductModelID",
                table: "CategoryModel",
                column: "ProductModelID",
                principalTable: "ProductModels",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerModelOrderDetailsModel_OrderDetailsModel_OrderDetailsModelsID",
                table: "CustomerModelOrderDetailsModel",
                column: "OrderDetailsModelsID",
                principalTable: "OrderDetailsModel",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerModelReportModel_ReportModel_ReportModelsID",
                table: "CustomerModelReportModel",
                column: "ReportModelsID",
                principalTable: "ReportModel",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductModels_OrderDetailsModel_OrderDetailsModelID",
                table: "ProductModels",
                column: "OrderDetailsModelID",
                principalTable: "OrderDetailsModel",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ReportModel_AdminModel_adminModelID",
                table: "ReportModel",
                column: "adminModelID",
                principalTable: "AdminModel",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
