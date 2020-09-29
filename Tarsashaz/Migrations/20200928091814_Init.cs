using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tarsashaz.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Providers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Phone = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    AccountNum = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Providers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true),
                    Role = table.Column<int>(nullable: false),
                    Phone = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProviderAddresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PostCode = table.Column<int>(nullable: false),
                    City = table.Column<string>(nullable: false),
                    Street = table.Column<string>(nullable: false),
                    Number = table.Column<int>(nullable: false),
                    Floor = table.Column<int>(nullable: false),
                    Door = table.Column<int>(nullable: false),
                    ProviderId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProviderAddresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProviderAddresses_Providers_ProviderId",
                        column: x => x.ProviderId,
                        principalTable: "Providers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Condominiums",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CommonRepresentativeId = table.Column<int>(nullable: true),
                    CommonCharge = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Condominiums", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Condominiums_Users_CommonRepresentativeId",
                        column: x => x.CommonRepresentativeId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Announcements",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SenderId = table.Column<int>(nullable: true),
                    Range = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Priority = table.Column<int>(nullable: false),
                    Text = table.Column<string>(nullable: false),
                    CondominiumId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Announcements", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Announcements_Condominiums_CondominiumId",
                        column: x => x.CondominiumId,
                        principalTable: "Condominiums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Announcements_Users_SenderId",
                        column: x => x.SenderId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CondominiumAddresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PostCode = table.Column<int>(nullable: false),
                    City = table.Column<string>(nullable: false),
                    Street = table.Column<string>(nullable: false),
                    Number = table.Column<int>(nullable: false),
                    Floor = table.Column<int>(nullable: false),
                    Door = table.Column<int>(nullable: false),
                    CondominiumId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CondominiumAddresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CondominiumAddresses_Condominiums_CondominiumId",
                        column: x => x.CondominiumId,
                        principalTable: "Condominiums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Flats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AddressId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    CondominiumId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Flats_Condominiums_CondominiumId",
                        column: x => x.CondominiumId,
                        principalTable: "Condominiums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Flats_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Problems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<int>(nullable: false),
                    Text = table.Column<string>(nullable: false),
                    CondominiumId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Problems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Problems_Condominiums_CondominiumId",
                        column: x => x.CondominiumId,
                        principalTable: "Condominiums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FlatAddresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PostCode = table.Column<int>(nullable: false),
                    City = table.Column<string>(nullable: false),
                    Street = table.Column<string>(nullable: false),
                    Number = table.Column<int>(nullable: false),
                    Floor = table.Column<int>(nullable: false),
                    Door = table.Column<int>(nullable: false),
                    FlatId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlatAddresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FlatAddresses_Flats_FlatId",
                        column: x => x.FlatId,
                        principalTable: "Flats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FlatBalances",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<int>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    FlatId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlatBalances", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FlatBalances_Flats_FlatId",
                        column: x => x.FlatId,
                        principalTable: "Flats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FlatDatas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<int>(nullable: false),
                    Text = table.Column<string>(nullable: true),
                    Value = table.Column<int>(nullable: false),
                    FlatId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlatDatas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FlatDatas_Flats_FlatId",
                        column: x => x.FlatId,
                        principalTable: "Flats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProblemPictures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    ProblemId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProblemPictures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProblemPictures_Problems_ProblemId",
                        column: x => x.ProblemId,
                        principalTable: "Problems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Bill",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<int>(nullable: false),
                    ProviderId = table.Column<int>(nullable: true),
                    Amount = table.Column<int>(nullable: false),
                    IsPaid = table.Column<bool>(nullable: false),
                    UserId = table.Column<int>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    CondominiumId = table.Column<int>(nullable: true),
                    DestAddressId = table.Column<int>(nullable: true),
                    FlatId = table.Column<int>(nullable: true),
                    FlatBill_DestAddressId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bill", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Bill_Providers_ProviderId",
                        column: x => x.ProviderId,
                        principalTable: "Providers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bill_Condominiums_CondominiumId",
                        column: x => x.CondominiumId,
                        principalTable: "Condominiums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Bill_CondominiumAddresses_DestAddressId",
                        column: x => x.DestAddressId,
                        principalTable: "CondominiumAddresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bill_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bill_FlatAddresses_FlatBill_DestAddressId",
                        column: x => x.FlatBill_DestAddressId,
                        principalTable: "FlatAddresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bill_Flats_FlatId",
                        column: x => x.FlatId,
                        principalTable: "Flats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bill_Users_UserId1",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FlatPictures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    FlatDataId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlatPictures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FlatPictures_FlatDatas_FlatDataId",
                        column: x => x.FlatDataId,
                        principalTable: "FlatDatas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BillDates",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BillId = table.Column<int>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    PayoffStart = table.Column<DateTime>(nullable: false),
                    PayoffEnd = table.Column<DateTime>(nullable: false),
                    Deadline = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillDates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BillDates_Bill_BillId",
                        column: x => x.BillId,
                        principalTable: "Bill",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BillPictures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    BillId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillPictures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BillPictures_Bill_BillId",
                        column: x => x.BillId,
                        principalTable: "Bill",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_CondominiumId",
                table: "Announcements",
                column: "CondominiumId");

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_SenderId",
                table: "Announcements",
                column: "SenderId");

            migrationBuilder.CreateIndex(
                name: "IX_Bill_ProviderId",
                table: "Bill",
                column: "ProviderId");

            migrationBuilder.CreateIndex(
                name: "IX_Bill_CondominiumId",
                table: "Bill",
                column: "CondominiumId");

            migrationBuilder.CreateIndex(
                name: "IX_Bill_DestAddressId",
                table: "Bill",
                column: "DestAddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Bill_UserId",
                table: "Bill",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Bill_FlatBill_DestAddressId",
                table: "Bill",
                column: "FlatBill_DestAddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Bill_FlatId",
                table: "Bill",
                column: "FlatId");

            migrationBuilder.CreateIndex(
                name: "IX_Bill_UserId1",
                table: "Bill",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_BillDates_BillId",
                table: "BillDates",
                column: "BillId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BillPictures_BillId",
                table: "BillPictures",
                column: "BillId",
                unique: true,
                filter: "[BillId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_CondominiumAddresses_CondominiumId",
                table: "CondominiumAddresses",
                column: "CondominiumId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Condominiums_CommonRepresentativeId",
                table: "Condominiums",
                column: "CommonRepresentativeId");

            migrationBuilder.CreateIndex(
                name: "IX_FlatAddresses_FlatId",
                table: "FlatAddresses",
                column: "FlatId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FlatBalances_FlatId",
                table: "FlatBalances",
                column: "FlatId");

            migrationBuilder.CreateIndex(
                name: "IX_FlatDatas_FlatId",
                table: "FlatDatas",
                column: "FlatId");

            migrationBuilder.CreateIndex(
                name: "IX_FlatPictures_FlatDataId",
                table: "FlatPictures",
                column: "FlatDataId");

            migrationBuilder.CreateIndex(
                name: "IX_Flats_CondominiumId",
                table: "Flats",
                column: "CondominiumId");

            migrationBuilder.CreateIndex(
                name: "IX_Flats_UserId",
                table: "Flats",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ProblemPictures_ProblemId",
                table: "ProblemPictures",
                column: "ProblemId");

            migrationBuilder.CreateIndex(
                name: "IX_Problems_CondominiumId",
                table: "Problems",
                column: "CondominiumId");

            migrationBuilder.CreateIndex(
                name: "IX_ProviderAddresses_ProviderId",
                table: "ProviderAddresses",
                column: "ProviderId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Announcements");

            migrationBuilder.DropTable(
                name: "BillDates");

            migrationBuilder.DropTable(
                name: "BillPictures");

            migrationBuilder.DropTable(
                name: "FlatBalances");

            migrationBuilder.DropTable(
                name: "FlatPictures");

            migrationBuilder.DropTable(
                name: "ProblemPictures");

            migrationBuilder.DropTable(
                name: "ProviderAddresses");

            migrationBuilder.DropTable(
                name: "Bill");

            migrationBuilder.DropTable(
                name: "FlatDatas");

            migrationBuilder.DropTable(
                name: "Problems");

            migrationBuilder.DropTable(
                name: "Providers");

            migrationBuilder.DropTable(
                name: "CondominiumAddresses");

            migrationBuilder.DropTable(
                name: "FlatAddresses");

            migrationBuilder.DropTable(
                name: "Flats");

            migrationBuilder.DropTable(
                name: "Condominiums");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
