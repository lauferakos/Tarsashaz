using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.DAL.Repositories
{
    public class ProblemPictureRepository : IProblemPictureRepository
    {
        private readonly CondominiumDbContext db;

        public ProblemPictureRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public ProblemPicture Delete(int id)
        {
            ProblemPicture deleted = db.ProblemPictures.Find(id);
            db.ProblemPictures.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public ProblemPicture Find(int id)
        {
            return db.ProblemPictures.Find(id);
        }

        public ProblemPicture Insert(ProblemPicture i)
        {
            db.ProblemPictures.Add(i);
            db.SaveChanges();
            return i;
        }

        public ProblemPicture Update(ProblemPicture u, int id)
        {
            ProblemPicture updated = db.ProblemPictures.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
