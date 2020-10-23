using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tarsashaz.Migrations
{
    public partial class FlatBalanceUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FlatBalances",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DropColumn(
                name: "Amount",
                table: "FlatBalances");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "FlatBalances");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "FlatBalances",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "ElectricalAmount",
                table: "FlatBalances",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "HeatingAmount",
                table: "FlatBalances",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WaterAmount",
                table: "FlatBalances",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Announcements",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: new DateTime(2020, 10, 23, 12, 29, 30, 946, DateTimeKind.Local).AddTicks(3005));

            migrationBuilder.UpdateData(
                table: "BillDates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Deadline", "PayoffEnd", "PayoffStart", "StartDate" },
                values: new object[] { new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(3882), new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(3299), new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(2660), new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(1899) });

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 5,
                column: "UserId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 6,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 7,
                column: "UserId",
                value: 4);

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
                keyValue: 10,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 11,
                column: "UserId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 12,
                column: "UserId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 14,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                column: "Phone",
                value: "9067825");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                column: "Phone",
                value: "1186405");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                column: "Phone",
                value: "6018036");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5,
                column: "Phone",
                value: "2501586");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 6,
                column: "Phone",
                value: "1944173");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 7,
                column: "Phone",
                value: "3538929");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 8,
                column: "Phone",
                value: "2620021");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 9,
                column: "Phone",
                value: "5129819");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 10,
                column: "Phone",
                value: "3466237");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 11,
                column: "Phone",
                value: "1149602");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "FlatBalances");

            migrationBuilder.DropColumn(
                name: "ElectricalAmount",
                table: "FlatBalances");

            migrationBuilder.DropColumn(
                name: "HeatingAmount",
                table: "FlatBalances");

            migrationBuilder.DropColumn(
                name: "WaterAmount",
                table: "FlatBalances");

            migrationBuilder.AddColumn<int>(
                name: "Amount",
                table: "FlatBalances",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "FlatBalances",
                type: "int",
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

            migrationBuilder.InsertData(
                table: "FlatBalances",
                columns: new[] { "Id", "Amount", "FlatId", "Type" },
                values: new object[] { 1, 1000, 1, 2 });

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
                keyValue: 7,
                column: "UserId",
                value: 3);

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
                keyValue: 10,
                column: "UserId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 11,
                column: "UserId",
                value: 3);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 12,
                column: "UserId",
                value: 4);

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
        }
    }
}
