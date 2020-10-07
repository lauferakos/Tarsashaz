using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.DAL.IRepositories
{
    public interface ICondominiumRepository
    {
        public Condominium Insert(Condominium i);
        public Condominium Update(Condominium u, int id);

        public Condominium Delete(int id);
        public Condominium Find(int id);
        public Condominium FindByCrId(int crId);

        public List<Condominium> FindAllWithAddress();

        
    }
}
