using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.Repositories
{
    public class FlatDataRepository : IFlatDataRepository
    {
        private readonly CondominiumDbContext db;

        public FlatDataRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public FlatData Delete(int id)
        {
            FlatData deleted = db.FlatDatas.Find(id);
            db.FlatDatas.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public FlatData Find(int id)
        {
            return db.FlatDatas.Find(id);
        }

        public FlatData Insert(FlatData i)
        {
            db.FlatDatas.Add(i);
            db.SaveChanges();
            return i;
        }

        public FlatData Update(FlatData u, int id)
        {
            FlatData updated = db.FlatDatas.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
