using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.DAL.Repositories
{
    public class FlatAddressRepository : IFlatAddressRepository
    {
        private readonly CondominiumDbContext db;

        public FlatAddressRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public FlatAddress Delete(int id)
        {
            FlatAddress deleted = db.FlatAddresses.Find(id);
            db.FlatAddresses.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public FlatAddress Find(int id)
        {
            return db.FlatAddresses.Find(id);
        }

        public FlatAddress Insert(FlatAddress i)
        {
            db.FlatAddresses.Add(i);
            db.SaveChanges();
            return i;
        }

        public FlatAddress Update(FlatAddress u, int id)
        {
            FlatAddress updated = db.FlatAddresses.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
