using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.IRepositories
{
    public interface ICondominiumBillRepository
    {
        public CondominiumBill Insert(CondominiumBill i);
        public CondominiumBill Update(CondominiumBill u, int id);

        public CondominiumBill Delete(int id);
        public CondominiumBill Find(int id);
    }
}
