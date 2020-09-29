using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.Repositories
{
    public class BillDateRepository : IBillDateRepository
    {
        private readonly CondominiumDbContext db;

        public BillDateRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public BillDate Delete(int id)
        {
            BillDate deleted = db.BillDates.Find(id);
            db.BillDates.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public BillDate Find(int id)
        {
            return db.BillDates.Find(id);
        }

        public BillDate Insert(BillDate i)
        {
            db.BillDates.Add(i);
            db.SaveChanges();
            return i;
        }

        public BillDate Update(BillDate u, int id)
        {
            BillDate updated = db.BillDates.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
