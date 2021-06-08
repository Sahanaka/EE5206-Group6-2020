using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_BackendApi.Migrations
{
    public partial class Changedcustomermodeltoadduserroledynamically : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserRole",
                table: "CustomerModels",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserRole",
                table: "CustomerModels");
        }
    }
}
