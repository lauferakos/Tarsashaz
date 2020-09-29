using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IFlatBillRepository
    {
        public FlatBill Insert(FlatBill i);
        public FlatBill Update(FlatBill u, int id);

        public FlatBill Delete(int id);
        public FlatBill Find(int id);
    }
}
