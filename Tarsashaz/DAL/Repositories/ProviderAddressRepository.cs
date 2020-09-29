using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.DAL.Repositories
{
    public class ProviderAddressRepository : IProviderAddressRepository
    {
        private readonly CondominiumDbContext db;

        public ProviderAddressRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public ProviderAddress Delete(int id)
        {
            ProviderAddress deleted = db.ProviderAddresses.Find(id);
            db.ProviderAddresses.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public ProviderAddress Find(int id)
        {
            return db.ProviderAddresses.Find(id);
        }

        public ProviderAddress Insert(ProviderAddress i)
        {
            db.ProviderAddresses.Add(i);
            db.SaveChanges();
            return i;
        }

        public ProviderAddress Update(ProviderAddress u, int id)
        {
            ProviderAddress updated = db.ProviderAddresses.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
