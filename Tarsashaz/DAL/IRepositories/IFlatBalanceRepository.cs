using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IFlatBalanceRepository
    {
        public FlatBalance Insert(FlatBalance i);
        public FlatBalance Update(FlatBalance u, int id);

        public FlatBalance Delete(int id);
        public FlatBalance Find(int id);
    }
}
