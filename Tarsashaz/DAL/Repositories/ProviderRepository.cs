using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.Repositories
{
    public class ProviderRepository : IProviderRepository
    {
        private readonly CondominiumDbContext db;

        public ProviderRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public Provider Delete(int id)
        {
            Provider deleted = db.Providers.Find(id);
            db.Providers.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public Provider Find(int id)
        {
            return db.Providers.Find(id);
        }

        public Provider Insert(Provider i)
        {
            db.Providers.Add(i);
            db.SaveChanges();
            return i;
        }

        public Provider Update(Provider u, int id)
        {
            Provider updated = db.Providers.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
