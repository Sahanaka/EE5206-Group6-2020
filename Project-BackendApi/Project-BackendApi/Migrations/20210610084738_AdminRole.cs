using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_BackendApi.Migrations
{
    public partial class AdminRole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrderDetailsModel_OrderDetailsModels_OrderDetailsId",
                table: "CustomerOrderDetailsModel");

            migrationBuilder.DropTable(
                name: "OrderDetailsModels");

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrderDetailsModel_OrderProductsModels_OrderDetailsId",
                table: "CustomerOrderDetailsModel",
                column: "OrderDetailsId",
                principalTable: "OrderProductsModels",
                principalColumn: "OrderDetailsId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrderDetailsModel_OrderProductsModels_OrderDetailsId",
                table: "CustomerOrderDetailsModel");

            migrationBuilder.CreateTable(
                name: "OrderDetailsModels",
                columns: table => new
                {
                    OrderDetailsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductPrice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    cartModelsCartyId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetailsModels", x => x.OrderDetailsId);
                    table.ForeignKey(
                        name: "FK_OrderDetailsModels_cartModels_cartModelsCartyId",
                        column: x => x.cartModelsCartyId,
                        principalTable: "cartModels",
                        principalColumn: "CartyId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetailsModels_cartModelsCartyId",
                table: "OrderDetailsModels",
                column: "cartModelsCartyId");

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrderDetailsModel_OrderDetailsModels_OrderDetailsId",
                table: "CustomerOrderDetailsModel",
                column: "OrderDetailsId",
                principalTable: "OrderDetailsModels",
                principalColumn: "OrderDetailsId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
