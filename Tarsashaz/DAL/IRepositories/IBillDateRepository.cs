using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IBillDateRepository
    {
        public BillDate Insert(BillDate i);
        public BillDate Update(BillDate u, int id);

        public BillDate Delete(int id);
        public BillDate Find(int id);
    }
}
