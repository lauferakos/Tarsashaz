using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.DAL.Repositories
{
    public class CondominiumRepository : ICondominiumRepository
    {
        private readonly CondominiumDbContext db;

        public CondominiumRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public Condominium Delete(int id)
        {
            Condominium deleted = db.Condominiums.Find(id);
            db.Condominiums.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public Condominium Find(int id)
        {
            return db.Condominiums.Find(id);
        }

        public Condominium Insert(Condominium i)
        {
            db.Condominiums.Add(i);
            db.SaveChanges();
            return i;
        }

        public Condominium Update(Condominium u, int id)
        {
            Condominium updated = db.Condominiums.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
