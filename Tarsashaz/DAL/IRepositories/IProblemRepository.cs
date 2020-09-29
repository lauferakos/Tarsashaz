using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IProblemRepository
    {
        public Problem Insert(Problem i);
        public Problem Update(Problem u, int id);

        public Problem Delete(int id);
        public Problem Find(int id);
    }
}
