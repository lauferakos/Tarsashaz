using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tarsashaz.Migrations
{
    public partial class SeedDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.InsertData(
                table: "Condominiums",
                columns: new[] { "Id", "CommonCharge", "CommonRepresentativeId" },
                values: new object[] { 1, 1000, 1 });

            migrationBuilder.InsertData(
                table: "Providers",
                columns: new[] { "Id", "AccountNum", "Email", "Phone" },
                values: new object[] { 1, 132146547, "test@gmail.com", "4545645464" });

            migrationBuilder.InsertData(
                table: "Announcements",
                columns: new[] { "Id", "CondominiumId", "Date", "Priority", "Range", "SenderId", "Text" },
                values: new object[] { 1, 1, new DateTime(2020, 9, 29, 8, 29, 27, 848, DateTimeKind.Local).AddTicks(2453), 2, 0, 1, "TestString" });

            migrationBuilder.InsertData(
                table: "Bill",
                columns: new[] { "Id", "Amount", "Discriminator", "IsPaid", "ProviderId", "Type", "UserId", "CondominiumId", "DestAddressId" },
                values: new object[] { 1, 150, "CondominiumBill", false, 1, 1, 1, 1, null });

            migrationBuilder.InsertData(
                table: "CondominiumAddresses",
                columns: new[] { "Id", "City", "CondominiumId", "Door", "Floor", "Number", "PostCode", "Street" },
                values: new object[] { 1, "Tevel", 1, 0, 0, 10, 123, "Dorogi" });

            migrationBuilder.InsertData(
                table: "Flats",
                columns: new[] { "Id", "AddressId", "CondominiumId", "UserId" },
                values: new object[] { 1, 1, 1, 1 });

            migrationBuilder.InsertData(
                table: "Problems",
                columns: new[] { "Id", "CondominiumId", "Text", "Type" },
                values: new object[] { 1, 1, "TestString", 1 });

            migrationBuilder.InsertData(
                table: "ProviderAddresses",
                columns: new[] { "Id", "City", "Door", "Floor", "Number", "PostCode", "ProviderId", "Street" },
                values: new object[] { 1, "Budapest", 2, 3, 2, 1, 1, "Ferenc körút" });

            migrationBuilder.InsertData(
                table: "Bill",
                columns: new[] { "Id", "Amount", "Discriminator", "IsPaid", "ProviderId", "Type", "UserId", "FlatBill_DestAddressId", "FlatId" },
                values: new object[] { 2, 10, "FlatBill", true, 1, 0, 1, null, 1 });

            migrationBuilder.InsertData(
                table: "BillDates",
                columns: new[] { "Id", "BillId", "Deadline", "PayoffEnd", "PayoffStart", "StartDate" },
                values: new object[] { 1, 1, new DateTime(2020, 9, 29, 8, 29, 27, 851, DateTimeKind.Local).AddTicks(3677), new DateTime(2020, 9, 29, 8, 29, 27, 851, DateTimeKind.Local).AddTicks(3200), new DateTime(2020, 9, 29, 8, 29, 27, 851, DateTimeKind.Local).AddTicks(2760), new DateTime(2020, 9, 29, 8, 29, 27, 851, DateTimeKind.Local).AddTicks(2280) });

            migrationBuilder.InsertData(
                table: "FlatAddresses",
                columns: new[] { "Id", "City", "Door", "FlatId", "Floor", "Number", "PostCode", "Street" },
                values: new object[] { 1, "Tevel", 3, 1, 2, 10, 123, "Dorogi" });

            migrationBuilder.InsertData(
                table: "FlatBalances",
                columns: new[] { "Id", "Amount", "FlatId", "Type" },
                values: new object[] { 1, 1000, 1, 2 });

            migrationBuilder.InsertData(
                table: "FlatDatas",
                columns: new[] { "Id", "FlatId", "Text", "Type", "Value" },
                values: new object[] { 1, 1, "TestString", 0, 15 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Announcements",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Bill",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "BillDates",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "CondominiumAddresses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FlatAddresses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FlatBalances",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FlatDatas",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ProviderAddresses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Bill",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Flats",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Condominiums",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Providers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Name", "Phone", "Role", "Token" },
                values: new object[,]
                {
                    { 2, "teszt1@gmail.com", "Teszt1", "123546489", 1, "qweqwewqqweqeqe1" },
                    { 3, "teszt2@gmail.com", "Teszt2", "123546489", 1, "qweqwewqqweqeqe2" },
                    { 4, "teszt3@gmail.com", "Teszt3", "123546489", 1, "qweqwewqqweqeqe3" },
                    { 5, "teszt4@gmail.com", "Teszt4", "123546489", 1, "qweqwewqqweqeqe4" }
                });
        }
    }
}
