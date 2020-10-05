using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IFlatRepository
    {
        public Flat Insert(Flat i);
        public Flat Update(Flat u, int id);

        public Flat Delete(int id);
        public Flat Find(int id);

        public int GetCondominiumIdByFlat(Flat f);
    }
}
