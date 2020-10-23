using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.Repositories
{
    public class FlatBalanceRepository : IFlatBalanceRepository
    {
        private readonly CondominiumDbContext db;

        public FlatBalanceRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public FlatBalance Delete(int id)
        {
            FlatBalance deleted = db.FlatBalances.Find(id);
            db.FlatBalances.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public FlatBalance Find(int id)
        {
            return db.FlatBalances.Find(id);
        }

        public FlatBalance Insert(FlatBalance i)
        {
            db.FlatBalances.Add(i);
            db.SaveChanges();
            return i;
        }

        public FlatBalance Update(FlatBalance u, int id)
        {
            FlatBalance updated = db.FlatBalances.Find(id);
            updated.ElectricalAmount = u.ElectricalAmount;
            updated.WaterAmount = u.WaterAmount;
            updated.HeatingAmount = u.HeatingAmount;
            db.SaveChanges();
            return updated;
        }
    }
}
