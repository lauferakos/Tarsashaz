using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IFlatAddressRepository
    {
        public FlatAddress Insert(FlatAddress i);
        public FlatAddress Update(FlatAddress u, int id);

        public FlatAddress Delete(int id);
        public FlatAddress Find(int id);
    }
}
