using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IProviderRepository
    {
        public Provider Insert(Provider i);
        public Provider Update(Provider u, int id);

        public Provider Delete(int id);
        public Provider Find(int id);
        public Provider FindByAddress(ProviderAddress address);
    }
}
