using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_BackendApi.Migrations
{
    public partial class Cart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "cartModels",
                columns: table => new
                {
                    CartyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cartItems = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    itemsPrice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    taxPrice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    shippingPrice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    totalPrice = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cartModels", x => x.CartyId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "cartModels");
        }
    }
}
