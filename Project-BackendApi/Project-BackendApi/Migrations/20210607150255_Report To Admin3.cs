using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_BackendApi.Migrations
{
    public partial class ReportToAdmin3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrderProductsModels",
                columns: table => new
                {
                    OrderDetailsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductPrice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    OrderNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cartModelsCartyId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderProductsModels", x => x.OrderDetailsId);
                    table.ForeignKey(
                        name: "FK_OrderProductsModels_cartModels_cartModelsCartyId",
                        column: x => x.cartModelsCartyId,
                        principalTable: "cartModels",
                        principalColumn: "CartyId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderProductsModels_cartModelsCartyId",
                table: "OrderProductsModels",
                column: "cartModelsCartyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderProductsModels");
        }
    }
}
