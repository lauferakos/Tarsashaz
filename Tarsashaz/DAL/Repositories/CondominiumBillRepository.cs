using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.Repositories
{
    public class CondominiumBillRepository : ICondominiumBillRepository
    {
        private readonly CondominiumDbContext db;

        public CondominiumBillRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public CondominiumBill Delete(int id)
        {
            CondominiumBill deleted = db.CondominiumBills.Find(id);
            db.CondominiumBills.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public CondominiumBill Find(int id)
        {
            return db.CondominiumBills.Find(id);
        }

        public CondominiumBill Insert(CondominiumBill i)
        {
            db.CondominiumBills.Add(i);
            db.SaveChanges();
            return i;
        }

        public CondominiumBill Update(CondominiumBill u, int id)
        {
            CondominiumBill updated = db.CondominiumBills.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
