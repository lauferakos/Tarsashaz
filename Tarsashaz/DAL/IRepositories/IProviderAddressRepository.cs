using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IProviderAddressRepository
    {
        public ProviderAddress Insert(ProviderAddress i);
        public ProviderAddress Update(ProviderAddress u, int id);

        public ProviderAddress Delete(int id);
        public ProviderAddress Find(int id);
    }
}
