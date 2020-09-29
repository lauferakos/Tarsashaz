using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IFlatDataRepository
    {
        public FlatData Insert(FlatData i);
        public FlatData Update(FlatData u, int id);

        public FlatData Delete(int id);
        public FlatData Find(int id);
    }
}
