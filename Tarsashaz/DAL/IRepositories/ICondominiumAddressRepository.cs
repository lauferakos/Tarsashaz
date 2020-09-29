using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.DAL.IRepositories
{
    public interface ICondominiumAddressRepository
    {
        public CondominiumAddress Insert(CondominiumAddress i);
        public CondominiumAddress Update(CondominiumAddress u, int id);

        public CondominiumAddress Delete(int id);
        public CondominiumAddress Find(int id);
    }
}
