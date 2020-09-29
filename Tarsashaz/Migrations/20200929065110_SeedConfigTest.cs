using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tarsashaz.Migrations
{
    public partial class SeedConfigTest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Name", "Phone", "Role", "Token" },
                values: new object[,]
                {
                    { 2, "testUser0@gmail.com", "TestUser0", "7824980", 1, "token0" },
                    { 3, "testUser1@gmail.com", "TestUser1", "4233751", 1, "token1" },
                    { 4, "testUser2@gmail.com", "TestUser2", "7550552", 1, "token2" },
                    { 5, "testUser3@gmail.com", "TestUser3", "3399754", 1, "token3" },
                    { 6, "testUser4@gmail.com", "TestUser4", "2227372", 1, "token4" },
                    { 7, "testUser5@gmail.com", "TestUser5", "7748162", 1, "token5" },
                    { 8, "testUser6@gmail.com", "TestUser6", "3151082", 1, "token6" },
                    { 9, "testUser7@gmail.com", "TestUser7", "2343041", 1, "token7" },
                    { 10, "testUser8@gmail.com", "TestUser8", "7898783", 1, "token8" },
                    { 11, "testUser9@gmail.com", "TestUser9", "1191461", 1, "token9" }
                });

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 5,
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
                value: 2);

            migrationBuilder.UpdateData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 12,
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.UpdateData(
                table: "Announcements",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: new DateTime(2020, 9, 29, 8, 41, 14, 143, DateTimeKind.Local).AddTicks(8536));

            migrationBuilder.UpdateData(
                table: "BillDates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Deadline", "PayoffEnd", "PayoffStart", "StartDate" },
                values: new object[] { new DateTime(2020, 9, 29, 8, 41, 14, 147, DateTimeKind.Local).AddTicks(284), new DateTime(2020, 9, 29, 8, 41, 14, 146, DateTimeKind.Local).AddTicks(9871), new DateTime(2020, 9, 29, 8, 41, 14, 146, DateTimeKind.Local).AddTicks(9449), new DateTime(2020, 9, 29, 8, 41, 14, 146, DateTimeKind.Local).AddTicks(8967) });

            migrationBuilder.InsertData(
                table: "Flats",
                columns: new[] { "Id", "AddressId", "CondominiumId", "UserId" },
                values: new object[,]
                {
                    { 9, 1, 1, 1 },
                    { 11, 1, 1, 4 },
                    { 8, 1, 1, 4 },
                    { 7, 1, 1, 1 },
                    { 6, 1, 1, 2 },
                    { 5, 1, 1, 2 },
                    { 10, 1, 1, 1 },
                    { 14, 1, 1, 3 },
                    { 12, 1, 1, 1 },
                    { 13, 1, 1, 2 }
                });
        }
    }
}
