using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.Repositories
{
    public class FlatBillRepository : IFlatBillRepository
    {
        private readonly CondominiumDbContext db;

        public FlatBillRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public FlatBill Delete(int id)
        {
            FlatBill deleted = db.FlatBills.Find(id);
            db.FlatBills.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public FlatBill Find(int id)
        {
            return db.FlatBills.Find(id);
        }

        public FlatBill Insert(FlatBill i)
        {
            db.FlatBills.Add(i);
            db.SaveChanges();
            return i;
        }

        public FlatBill Update(FlatBill u, int id)
        {
            FlatBill updated = db.FlatBills.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
