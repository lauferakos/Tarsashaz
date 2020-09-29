using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.Repositories
{
    public class FlatRepository : IFlatRepository
    {
        private readonly CondominiumDbContext db;

        public FlatRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public Flat Delete(int id)
        {
            Flat deleted = db.Flats.Find(id);
            db.Flats.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public Flat Find(int id)
        {
            return db.Flats.Find(id);
        }

        public Flat Insert(Flat i)
        {
            db.Flats.Add(i);
            db.SaveChanges();
            return i;
        }

        public Flat Update(Flat u, int id)
        {
            Flat updated = db.Flats.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
