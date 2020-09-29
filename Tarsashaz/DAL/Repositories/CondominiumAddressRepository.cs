using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.DAL.Repositories
{
    public class CondominiumAddressRepository : ICondominiumAddressRepository
    {
        private readonly CondominiumDbContext db;

        public CondominiumAddressRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public CondominiumAddress Delete(int id)
        {
            CondominiumAddress deleted = db.CondominiumAddresses.Find(id);
            db.CondominiumAddresses.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public CondominiumAddress Find(int id)
        {
            return db.CondominiumAddresses.Find(id);
        }

        public CondominiumAddress Insert(CondominiumAddress i)
        {
            db.CondominiumAddresses.Add(i);
            db.SaveChanges();
            return i;
        }

        public CondominiumAddress Update(CondominiumAddress u, int id)
        {
            CondominiumAddress updated = db.CondominiumAddresses.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
