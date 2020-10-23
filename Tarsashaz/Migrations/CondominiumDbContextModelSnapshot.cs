﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Tarsashaz.DAL.DbContexts;

namespace Tarsashaz.Migrations
{
    [DbContext(typeof(CondominiumDbContext))]
    partial class CondominiumDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Tarsashaz.Models.Addresses.CondominiumAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CondominiumId")
                        .HasColumnType("int");

                    b.Property<int>("Door")
                        .HasColumnType("int");

                    b.Property<int>("Floor")
                        .HasColumnType("int");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<int>("PostCode")
                        .HasColumnType("int");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CondominiumId")
                        .IsUnique();

                    b.ToTable("CondominiumAddresses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            City = "Tevel",
                            CondominiumId = 1,
                            Door = 0,
                            Floor = 0,
                            Number = 10,
                            PostCode = 123,
                            Street = "Dorogi"
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Addresses.FlatAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Door")
                        .HasColumnType("int");

                    b.Property<int>("FlatId")
                        .HasColumnType("int");

                    b.Property<int>("Floor")
                        .HasColumnType("int");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<int>("PostCode")
                        .HasColumnType("int");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FlatId")
                        .IsUnique();

                    b.ToTable("FlatAddresses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            City = "Tevel",
                            Door = 3,
                            FlatId = 1,
                            Floor = 2,
                            Number = 10,
                            PostCode = 123,
                            Street = "Dorogi"
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Addresses.ProviderAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Door")
                        .HasColumnType("int");

                    b.Property<int>("Floor")
                        .HasColumnType("int");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<int>("PostCode")
                        .HasColumnType("int");

                    b.Property<int>("ProviderId")
                        .HasColumnType("int");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProviderId")
                        .IsUnique();

                    b.ToTable("ProviderAddresses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            City = "Budapest",
                            Door = 2,
                            Floor = 3,
                            Number = 2,
                            PostCode = 1,
                            ProviderId = 1,
                            Street = "Ferenc körút"
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.Bill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Amount")
                        .HasColumnType("int");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsPaid")
                        .HasColumnType("bit");

                    b.Property<int?>("ProviderId")
                        .HasColumnType("int");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProviderId");

                    b.ToTable("Bill");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Bill");
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.BillDate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BillId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Deadline")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("PayoffEnd")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("PayoffStart")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BillId")
                        .IsUnique();

                    b.ToTable("BillDates");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BillId = 1,
                            Deadline = new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(3882),
                            PayoffEnd = new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(3299),
                            PayoffStart = new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(2660),
                            StartDate = new DateTime(2020, 10, 23, 12, 29, 30, 951, DateTimeKind.Local).AddTicks(1899)
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.Provider", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AccountNum")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Providers");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AccountNum = 132146547,
                            Email = "test@gmail.com",
                            Phone = "4545645464"
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Condominiums.Announcement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CondominiumId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<int>("Range")
                        .HasColumnType("int");

                    b.Property<int?>("SenderId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CondominiumId");

                    b.HasIndex("SenderId");

                    b.ToTable("Announcements");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CondominiumId = 1,
                            Date = new DateTime(2020, 10, 23, 12, 29, 30, 946, DateTimeKind.Local).AddTicks(3005),
                            Priority = 2,
                            Range = 0,
                            SenderId = 1,
                            Text = "TestString"
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Condominiums.Condominium", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CommonCharge")
                        .HasColumnType("int");

                    b.Property<int?>("CommonRepresentativeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CommonRepresentativeId");

                    b.ToTable("Condominiums");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CommonCharge = 1000,
                            CommonRepresentativeId = 1
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Condominiums.Problem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CondominiumId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CondominiumId");

                    b.ToTable("Problems");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CondominiumId = 1,
                            Text = "TestString",
                            Type = 1
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Flats.Flat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AddressId")
                        .HasColumnType("int");

                    b.Property<int>("CondominiumId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CondominiumId");

                    b.HasIndex("UserId");

                    b.ToTable("Flats");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 1
                        },
                        new
                        {
                            Id = 5,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 2
                        },
                        new
                        {
                            Id = 6,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 3
                        },
                        new
                        {
                            Id = 7,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 4
                        },
                        new
                        {
                            Id = 8,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 3
                        },
                        new
                        {
                            Id = 9,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 4
                        },
                        new
                        {
                            Id = 10,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 3
                        },
                        new
                        {
                            Id = 11,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 1
                        },
                        new
                        {
                            Id = 12,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 2
                        },
                        new
                        {
                            Id = 13,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 2
                        },
                        new
                        {
                            Id = 14,
                            AddressId = 1,
                            CondominiumId = 1,
                            UserId = 3
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Flats.FlatBalance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("ElectricalAmount")
                        .HasColumnType("int");

                    b.Property<int>("FlatId")
                        .HasColumnType("int");

                    b.Property<int>("HeatingAmount")
                        .HasColumnType("int");

                    b.Property<int>("WaterAmount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FlatId");

                    b.ToTable("FlatBalances");
                });

            modelBuilder.Entity("Tarsashaz.Models.Flats.FlatData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FlatId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FlatId");

                    b.ToTable("FlatDatas");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            FlatId = 1,
                            Text = "TestString",
                            Type = 0,
                            Value = 15
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Pictures.BillPicture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BillId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("BillId")
                        .IsUnique()
                        .HasFilter("[BillId] IS NOT NULL");

                    b.ToTable("BillPictures");
                });

            modelBuilder.Entity("Tarsashaz.Models.Pictures.FlatPicture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("FlatDataId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FlatDataId");

                    b.ToTable("FlatPictures");
                });

            modelBuilder.Entity("Tarsashaz.Models.Pictures.ProblemPicture", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ProblemId")
                        .HasColumnType("int");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProblemId");

                    b.ToTable("ProblemPictures");
                });

            modelBuilder.Entity("Tarsashaz.Models.Users.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Balance")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<string>("Token")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Balance = 0,
                            Email = "lauferakos@gmail.com",
                            Name = "Akos",
                            Phone = "706477577",
                            Role = 0,
                            Token = "asdasdsadadasd"
                        },
                        new
                        {
                            Id = 2,
                            Balance = 0,
                            Email = "testUser0@gmail.com",
                            Name = "TestUser0",
                            Phone = "9067825",
                            Role = 1,
                            Token = "token0"
                        },
                        new
                        {
                            Id = 3,
                            Balance = 0,
                            Email = "testUser1@gmail.com",
                            Name = "TestUser1",
                            Phone = "1186405",
                            Role = 1,
                            Token = "token1"
                        },
                        new
                        {
                            Id = 4,
                            Balance = 0,
                            Email = "testUser2@gmail.com",
                            Name = "TestUser2",
                            Phone = "6018036",
                            Role = 1,
                            Token = "token2"
                        },
                        new
                        {
                            Id = 5,
                            Balance = 0,
                            Email = "testUser3@gmail.com",
                            Name = "TestUser3",
                            Phone = "2501586",
                            Role = 1,
                            Token = "token3"
                        },
                        new
                        {
                            Id = 6,
                            Balance = 0,
                            Email = "testUser4@gmail.com",
                            Name = "TestUser4",
                            Phone = "1944173",
                            Role = 1,
                            Token = "token4"
                        },
                        new
                        {
                            Id = 7,
                            Balance = 0,
                            Email = "testUser5@gmail.com",
                            Name = "TestUser5",
                            Phone = "3538929",
                            Role = 1,
                            Token = "token5"
                        },
                        new
                        {
                            Id = 8,
                            Balance = 0,
                            Email = "testUser6@gmail.com",
                            Name = "TestUser6",
                            Phone = "2620021",
                            Role = 1,
                            Token = "token6"
                        },
                        new
                        {
                            Id = 9,
                            Balance = 0,
                            Email = "testUser7@gmail.com",
                            Name = "TestUser7",
                            Phone = "5129819",
                            Role = 1,
                            Token = "token7"
                        },
                        new
                        {
                            Id = 10,
                            Balance = 0,
                            Email = "testUser8@gmail.com",
                            Name = "TestUser8",
                            Phone = "3466237",
                            Role = 1,
                            Token = "token8"
                        },
                        new
                        {
                            Id = 11,
                            Balance = 0,
                            Email = "testUser9@gmail.com",
                            Name = "TestUser9",
                            Phone = "1149602",
                            Role = 1,
                            Token = "token9"
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.CondominiumBill", b =>
                {
                    b.HasBaseType("Tarsashaz.Models.Bills.Bill");

                    b.Property<int>("CondominiumId")
                        .HasColumnType("int");

                    b.Property<int?>("DestAddressId")
                        .HasColumnType("int");

                    b.HasIndex("CondominiumId");

                    b.HasIndex("DestAddressId");

                    b.HasIndex("UserId");

                    b.HasDiscriminator().HasValue("CondominiumBill");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Amount = 150,
                            IsPaid = false,
                            ProviderId = 1,
                            Type = 1,
                            UserId = 1,
                            CondominiumId = 1
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.FlatBill", b =>
                {
                    b.HasBaseType("Tarsashaz.Models.Bills.Bill");

                    b.Property<int?>("DestAddressId")
                        .HasColumnName("FlatBill_DestAddressId")
                        .HasColumnType("int");

                    b.Property<int>("FlatId")
                        .HasColumnType("int");

                    b.HasIndex("DestAddressId");

                    b.HasIndex("FlatId");

                    b.HasIndex("UserId")
                        .HasName("IX_Bill_UserId1");

                    b.HasDiscriminator().HasValue("FlatBill");

                    b.HasData(
                        new
                        {
                            Id = 2,
                            Amount = 10,
                            IsPaid = true,
                            ProviderId = 1,
                            Type = 0,
                            UserId = 1,
                            FlatId = 1
                        });
                });

            modelBuilder.Entity("Tarsashaz.Models.Addresses.CondominiumAddress", b =>
                {
                    b.HasOne("Tarsashaz.Models.Condominiums.Condominium", "Condominium")
                        .WithOne("Address")
                        .HasForeignKey("Tarsashaz.Models.Addresses.CondominiumAddress", "CondominiumId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Addresses.FlatAddress", b =>
                {
                    b.HasOne("Tarsashaz.Models.Flats.Flat", "Flat")
                        .WithOne("Address")
                        .HasForeignKey("Tarsashaz.Models.Addresses.FlatAddress", "FlatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Addresses.ProviderAddress", b =>
                {
                    b.HasOne("Tarsashaz.Models.Bills.Provider", "Provider")
                        .WithOne("Address")
                        .HasForeignKey("Tarsashaz.Models.Addresses.ProviderAddress", "ProviderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.Bill", b =>
                {
                    b.HasOne("Tarsashaz.Models.Bills.Provider", "Provider")
                        .WithMany()
                        .HasForeignKey("ProviderId");
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.BillDate", b =>
                {
                    b.HasOne("Tarsashaz.Models.Bills.Bill", "Bill")
                        .WithOne("BillDate")
                        .HasForeignKey("Tarsashaz.Models.Bills.BillDate", "BillId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Condominiums.Announcement", b =>
                {
                    b.HasOne("Tarsashaz.Models.Condominiums.Condominium", "Condominium")
                        .WithMany("Announcements")
                        .HasForeignKey("CondominiumId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Tarsashaz.Models.Users.User", "Sender")
                        .WithMany()
                        .HasForeignKey("SenderId");
                });

            modelBuilder.Entity("Tarsashaz.Models.Condominiums.Condominium", b =>
                {
                    b.HasOne("Tarsashaz.Models.Users.User", "CommonRepresentative")
                        .WithMany()
                        .HasForeignKey("CommonRepresentativeId");
                });

            modelBuilder.Entity("Tarsashaz.Models.Condominiums.Problem", b =>
                {
                    b.HasOne("Tarsashaz.Models.Condominiums.Condominium", "Condominium")
                        .WithMany("Problems")
                        .HasForeignKey("CondominiumId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Flats.Flat", b =>
                {
                    b.HasOne("Tarsashaz.Models.Condominiums.Condominium", "Condominium")
                        .WithMany("Flats")
                        .HasForeignKey("CondominiumId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Tarsashaz.Models.Users.User", "User")
                        .WithMany("Flats")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Flats.FlatBalance", b =>
                {
                    b.HasOne("Tarsashaz.Models.Flats.Flat", "Flat")
                        .WithMany("Balances")
                        .HasForeignKey("FlatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Flats.FlatData", b =>
                {
                    b.HasOne("Tarsashaz.Models.Flats.Flat", "Flat")
                        .WithMany("FlatDatas")
                        .HasForeignKey("FlatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Tarsashaz.Models.Pictures.BillPicture", b =>
                {
                    b.HasOne("Tarsashaz.Models.Bills.Bill", "Bill")
                        .WithOne("Picture")
                        .HasForeignKey("Tarsashaz.Models.Pictures.BillPicture", "BillId");
                });

            modelBuilder.Entity("Tarsashaz.Models.Pictures.FlatPicture", b =>
                {
                    b.HasOne("Tarsashaz.Models.Flats.FlatData", "FlatData")
                        .WithMany("Pics")
                        .HasForeignKey("FlatDataId");
                });

            modelBuilder.Entity("Tarsashaz.Models.Pictures.ProblemPicture", b =>
                {
                    b.HasOne("Tarsashaz.Models.Condominiums.Problem", "Problem")
                        .WithMany("Pictures")
                        .HasForeignKey("ProblemId");
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.CondominiumBill", b =>
                {
                    b.HasOne("Tarsashaz.Models.Condominiums.Condominium", "Condominium")
                        .WithMany("Bills")
                        .HasForeignKey("CondominiumId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Tarsashaz.Models.Addresses.CondominiumAddress", "DestAddress")
                        .WithMany("Bills")
                        .HasForeignKey("DestAddressId");

                    b.HasOne("Tarsashaz.Models.Users.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Tarsashaz.Models.Bills.FlatBill", b =>
                {
                    b.HasOne("Tarsashaz.Models.Addresses.FlatAddress", "DestAddress")
                        .WithMany()
                        .HasForeignKey("DestAddressId");

                    b.HasOne("Tarsashaz.Models.Flats.Flat", "Flat")
                        .WithMany("Bills")
                        .HasForeignKey("FlatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Tarsashaz.Models.Users.User", "User")
                        .WithMany("FlatBills")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_Bill_Users_UserId1");
                });
#pragma warning restore 612, 618
        }
    }
}
