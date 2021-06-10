using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_BackendApi.Migrations
{
    public partial class Adminrole1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdminModels_ReportModels_ReportAdminId",
                table: "AdminModels");

            migrationBuilder.DropIndex(
                name: "IX_AdminModels_ReportAdminId",
                table: "AdminModels");

            migrationBuilder.DropColumn(
                name: "ReportAdminId",
                table: "AdminModels");

            migrationBuilder.AddColumn<int>(
                name: "ReportModelReportId",
                table: "AdminModels",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AdminModels_ReportModelReportId",
                table: "AdminModels",
                column: "ReportModelReportId");

            migrationBuilder.AddForeignKey(
                name: "FK_AdminModels_ReportModels_ReportModelReportId",
                table: "AdminModels",
                column: "ReportModelReportId",
                principalTable: "ReportModels",
                principalColumn: "ReportId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdminModels_ReportModels_ReportModelReportId",
                table: "AdminModels");

            migrationBuilder.DropIndex(
                name: "IX_AdminModels_ReportModelReportId",
                table: "AdminModels");

            migrationBuilder.DropColumn(
                name: "ReportModelReportId",
                table: "AdminModels");

            migrationBuilder.AddColumn<int>(
                name: "ReportAdminId",
                table: "AdminModels",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AdminModels_ReportAdminId",
                table: "AdminModels",
                column: "ReportAdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_AdminModels_ReportModels_ReportAdminId",
                table: "AdminModels",
                column: "ReportAdminId",
                principalTable: "ReportModels",
                principalColumn: "ReportId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
