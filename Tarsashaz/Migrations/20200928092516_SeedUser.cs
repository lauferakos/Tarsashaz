using Microsoft.EntityFrameworkCore.Migrations;

namespace Tarsashaz.Migrations
{
    public partial class SeedUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Name", "Phone", "Role", "Token" },
                values: new object[,]
                {
                    { 1, "lauferakos@gmail.com", "Akos", "706477577", 0, "asdasdsadadasd" },
                    { 2, "teszt1@gmail.com", "Teszt1", "123546489", 1, "qweqwewqqweqeqe1" },
                    { 3, "teszt2@gmail.com", "Teszt2", "123546489", 1, "qweqwewqqweqeqe2" },
                    { 4, "teszt3@gmail.com", "Teszt3", "123546489", 1, "qweqwewqqweqeqe3" },
                    { 5, "teszt4@gmail.com", "Teszt4", "123546489", 1, "qweqwewqqweqeqe4" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

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
        }
    }
}
