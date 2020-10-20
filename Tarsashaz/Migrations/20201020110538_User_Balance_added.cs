using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tarsashaz.Migrations
{
    public partial class User_Balance_added : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bill_Flats_FlatId",
                table: "Bill");

            migrationBuilder.AddColumn<int>(
                name: "Balance",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Announcements",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: new DateTime(2020, 10, 20, 13, 5, 37, 753, DateTimeKind.Local).AddTicks(3313));

            migrationBuilder.UpdateData(
                table: "BillDates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Deadline", "PayoffEnd", "PayoffStart", "StartDate" },
                values: new object[] { new DateTime(2020, 10, 20, 13, 5, 37, 756, DateTimeKind.Local).AddTicks(6534), new DateTime(2020, 10, 20, 13, 5, 37, 756, DateTimeKind.Local).AddTicks(6120), new DateTime(2020, 10, 20, 13, 5, 37, 756, DateTimeKind.Local).AddTicks(5698), new DateTime(2020, 10, 20, 13, 5, 37, 756, DateTimeKind.Local).AddTicks(5239) });

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 5,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 6,
                column: "UserId",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 8,
                column: "UserId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 9,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 11,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 13,
                column: "UserId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 14,
                column: "UserId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Phone",
                value: "1193953");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Phone",
                value: "7091755");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Phone",
                value: "7212048");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Phone",
                value: "5099954");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 6,
                column: "Phone",
                value: "1924126");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 7,
                column: "Phone",
                value: "6984131");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 8,
                column: "Phone",
                value: "7508205");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 9,
                column: "Phone",
                value: "6377800");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 10,
                column: "Phone",
                value: "2331940");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 11,
                column: "Phone",
                value: "7299238");

            migrationBuilder.AddForeignKey(
                name: "FK_Bill_Flats_FlatId",
                table: "Bill",
                column: "FlatId",
                principalTable: "Flats",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bill_Flats_FlatId",
                table: "Bill");

            migrationBuilder.DropColumn(
                name: "Balance",
                table: "Users");

            migrationBuilder.UpdateData(
                table: "Announcements",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: new DateTime(2020, 9, 29, 8, 51, 9, 504, DateTimeKind.Local).AddTicks(8828));

            migrationBuilder.UpdateData(
                table: "BillDates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Deadline", "PayoffEnd", "PayoffStart", "StartDate" },
                values: new object[] { new DateTime(2020, 9, 29, 8, 51, 9, 508, DateTimeKind.Local).AddTicks(993), new DateTime(2020, 9, 29, 8, 51, 9, 508, DateTimeKind.Local).AddTicks(588), new DateTime(2020, 9, 29, 8, 51, 9, 508, DateTimeKind.Local).AddTicks(168), new DateTime(2020, 9, 29, 8, 51, 9, 507, DateTimeKind.Local).AddTicks(9702) });

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 5,
                column: "UserId",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 6,
                column: "UserId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 8,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 9,
                column: "UserId",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 11,
                column: "UserId",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 13,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 14,
                column: "UserId",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Phone",
                value: "7824980");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Phone",
                value: "4233751");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Phone",
                value: "7550552");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Phone",
                value: "3399754");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 6,
                column: "Phone",
                value: "2227372");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 7,
                column: "Phone",
                value: "7748162");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 8,
                column: "Phone",
                value: "3151082");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 9,
                column: "Phone",
                value: "2343041");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 10,
                column: "Phone",
                value: "7898783");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 11,
                column: "Phone",
                value: "1191461");

            migrationBuilder.AddForeignKey(
                name: "FK_Bill_Flats_FlatId",
                table: "Bill",
                column: "FlatId",
                principalTable: "Flats",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
