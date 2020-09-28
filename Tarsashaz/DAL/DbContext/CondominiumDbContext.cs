using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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
    }
}
