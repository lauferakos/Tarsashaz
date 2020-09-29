using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.DAL.Repositories
{
    public class ProblemRepository : IProblemRepository
    {
        private readonly CondominiumDbContext db;

        public ProblemRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public Problem Delete(int id)
        {
            Problem deleted = db.Problems.Find(id);
            db.Problems.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public Problem Find(int id)
        {
            return db.Problems.Find(id);
        }

        public Problem Insert(Problem i)
        {
            db.Problems.Add(i);
            db.SaveChanges();
            return i;
        }

        public Problem Update(Problem u, int id)
        {
            Problem updated = db.Problems.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
