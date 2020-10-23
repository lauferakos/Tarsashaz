using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Tarsashaz.DAL.SeedData;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Bills;
using Tarsashaz.Models.Condominiums;
using Tarsashaz.Models.Flats;
using Tarsashaz.Models.Pictures;
using Tarsashaz.Models.Users;


namespace Tarsashaz.DAL.DbContexts
{
    public class CondominiumDbContext : DbContext
    {
        public CondominiumDbContext(DbContextOptions options):base(options){ }

        //Addresses
        public DbSet<CondominiumAddress> CondominiumAddresses { get; set; }
        public DbSet<FlatAddress> FlatAddresses { get; set; }
        public DbSet<ProviderAddress> ProviderAddresses { get; set; }

        //Bills
        public DbSet<CondominiumBill> CondominiumBills { get; set; }
        public DbSet<FlatBill> FlatBills { get; set; }
        public DbSet<BillDate> BillDates { get; set; }
        public DbSet<Provider> Providers { get; set; }

        //Condominiums
        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<Condominium> Condominiums { get; set; }
        public DbSet<Problem> Problems { get; set; }

        //Flats
        public DbSet<Flat> Flats { get; set; }
        public DbSet<FlatBalance> FlatBalances { get; set; }
        public DbSet<FlatData> FlatDatas { get; set; }

        //Picture
        public DbSet<BillPicture> BillPictures { get; set; }
        public DbSet<FlatPicture> FlatPictures { get; set; }
        public DbSet<ProblemPicture> ProblemPictures { get; set; }

        //Users
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // több - 1 kapcsolatok
            modelBuilder.Entity<Announcement>()
                .HasOne(a => a.Condominium)
                .WithMany(c => c.Announcements)
                .HasForeignKey(a => a.CondominiumId);

            modelBuilder.Entity<Problem>()
                .HasOne(p => p.Condominium)
                .WithMany(c => c.Problems)
                .HasForeignKey(p => p.CondominiumId);

            modelBuilder.Entity<Flat>()
                .HasOne(f => f.Condominium)
                .WithMany(c => c.Flats)
                .HasForeignKey(f => f.CondominiumId);

            modelBuilder.Entity<CondominiumBill>()
                .HasOne(cb => cb.Condominium)
                .WithMany(c => c.Bills)
                .HasForeignKey(cb => cb.CondominiumId);

            modelBuilder.Entity<ProblemPicture>()
                .HasOne(pp => pp.Problem)
                .WithMany(p => p.Pictures)
                .HasForeignKey(pp => pp.ProblemId);

            modelBuilder.Entity<FlatBill>()
                .HasOne(fb => fb.Flat)
                .WithMany(f => f.Bills)
                .HasForeignKey(fb => fb.FlatId);

            modelBuilder.Entity<FlatData>()
            .HasOne(fd => fd.Flat)
            .WithMany(f => f.FlatDatas)
            .HasForeignKey(fd => fd.FlatId);

            modelBuilder.Entity<FlatBalance>()
            .HasOne(fb => fb.Flat)
            .WithMany(f => f.Balances)
            .HasForeignKey(fb => fb.FlatId);

            modelBuilder.Entity<FlatPicture>()
            .HasOne(fp => fp.FlatData)
            .WithMany(fd => fd.Pics)
            .HasForeignKey(fb => fb.FlatDataId);

            modelBuilder.Entity<Flat>()
            .HasOne(f => f.User)
            .WithMany(u => u.Flats)
            .HasForeignKey(f => f.UserId);

            modelBuilder.Entity<FlatBill>()
            .HasOne(fb => fb.User)
            .WithMany(u => u.FlatBills)
            .HasForeignKey(fb => fb.UserId);

            // 1 - 1 kapcsolatok

            modelBuilder.Entity<Condominium>()
            .HasOne(c => c.Address)
            .WithOne(ca => ca.Condominium)
            .HasForeignKey<CondominiumAddress>(ca => ca.CondominiumId);

            modelBuilder.Entity<Bill>()
            .HasOne(b => b.Picture)
            .WithOne(bp => bp.Bill)
            .HasForeignKey<BillPicture>(bp => bp.BillId);

            modelBuilder.Entity<Bill>()
            .HasOne(b => b.BillDate)
            .WithOne(bd => bd.Bill)
            .HasForeignKey<BillDate>(bd => bd.BillId);

            modelBuilder.Entity<Provider>()
            .HasOne(p => p.Address)
            .WithOne(a => a.Provider)
            .HasForeignKey<ProviderAddress>(a => a.ProviderId);

            modelBuilder.Entity<Flat>()
            .HasOne(f => f.Address)
            .WithOne(a => a.Flat)
            .HasForeignKey<FlatAddress>(a => a.FlatId);

            //Idegen kulcs

            modelBuilder.Entity<Bill>()
            .HasOne(b => b.Provider)
            .WithMany()
            .HasForeignKey(b => b.ProviderId);

            modelBuilder.Entity<CondominiumBill>()
            .HasOne(cb => cb.DestAddress)
            .WithMany(ca => ca.Bills)
            .HasForeignKey(cb => cb.DestAddressId);

            modelBuilder.Entity<FlatBill>()
            .HasOne(fb => fb.DestAddress)
            .WithMany()
            .HasForeignKey(fb => fb.DestAddressId);


            modelBuilder.Entity<Condominium>()
            .HasOne(c => c.CommonRepresentative)
            .WithMany()
            .HasForeignKey(c => c.CommonRepresentativeId);

            modelBuilder.Entity<Announcement>()
            .HasOne(a => a.Sender)
            .WithMany()
            .HasForeignKey(a => a.SenderId);

            //Seed
            
            modelBuilder.Entity<User>().HasData(    
                new User { Id = 1,Name = "Akos", Email = "lauferakos@gmail.com", Token = "asdasdsadadasd", Role = Role.cr, Phone = "706477577" }
            );

            modelBuilder.Entity<FlatAddress>().HasData(
                new FlatAddress {Id=1, PostCode=123,City="Tevel",Street="Dorogi",Number=10,Floor=2,Door=3,FlatId=1}
                );
            modelBuilder.Entity<Flat>().HasData(
                new Flat {Id=1,AddressId=1,UserId=1,CondominiumId=1}
                );
            modelBuilder.Entity<FlatData>().HasData(
                new FlatData { Id=1,Type = FlatDataType.Water,Text="TestString",Value=15,FlatId=1}
                );

            modelBuilder.Entity<Condominium>().HasData(
                new Condominium { Id=1,CommonRepresentativeId=1,CommonCharge=1000}
                );
            modelBuilder.Entity<CondominiumAddress>().HasData(
                new CondominiumAddress {Id=1, PostCode = 123, City = "Tevel", Street = "Dorogi", Number = 10,CondominiumId = 1 }
                );
            modelBuilder.Entity<Announcement>().HasData(
                new Announcement { 
                    Id=1,
                    SenderId=1,
                    Range= Tarsashaz.Models.Condominiums.Range.resident,
                    Date=DateTime.Now,
                    Priority=Priority.high,
                    Text="TestString",
                    CondominiumId = 1
                }
                );
            modelBuilder.Entity<Problem>().HasData(
                new Problem { Id=1,Type = ProblemType.társasház,Text="TestString",CondominiumId=1}
                );

            modelBuilder.Entity<BillDate>().HasData(
                new BillDate { 
                    Id=1,
                    BillId=1,
                    StartDate = DateTime.Now,
                    PayoffStart = DateTime.Now,
                    PayoffEnd = DateTime.Now,
                    Deadline = DateTime.Now
                });

            
            modelBuilder.Entity<FlatBill>().HasData(
                new FlatBill { Id=2,Type=BillType.Water,ProviderId = 1,Amount= 10,IsPaid=true,UserId=1,FlatId = 1}
                );
            modelBuilder.Entity<Provider>().HasData(
                new Provider { 
                    Id=1, 
                    Phone="4545645464",
                    Email="test@gmail.com",
                    AccountNum = 132146547

                }
                );
            modelBuilder.Entity<ProviderAddress>().HasData(
                new ProviderAddress
                {
                    Id = 1,
                    PostCode = 1,
                    City = "Budapest",
                    Street = "Ferenc körút",
                    Number = 2,
                    Floor = 3,
                    Door = 2,
                    ProviderId = 1
                }
                );
            modelBuilder.Entity<CondominiumBill>().HasData(
                new CondominiumBill {Id=1,Type =BillType.Electric, ProviderId = 1, Amount = 150, IsPaid = false,UserId=1, CondominiumId=1
                }
                );
           


            modelBuilder.ApplyConfiguration(new UserSeedConfig());
            modelBuilder.ApplyConfiguration(new FlatSeedConfig());
        }
    }
}
