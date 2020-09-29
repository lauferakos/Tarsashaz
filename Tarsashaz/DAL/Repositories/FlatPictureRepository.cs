using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.DAL.Repositories
{
    public class FlatPictureRepository : IFlatPictureRepository
    {
        private readonly CondominiumDbContext db;

        public FlatPictureRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public FlatPicture Delete(int id)
        {
            FlatPicture deleted = db.FlatPictures.Find(id);
            db.FlatPictures.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public FlatPicture Find(int id)
        {
            return db.FlatPictures.Find(id);
        }

        public FlatPicture Insert(FlatPicture i)
        {
            db.FlatPictures.Add(i);
            db.SaveChanges();
            return i;
        }

        public FlatPicture Update(FlatPicture u, int id)
        {
            FlatPicture updated = db.FlatPictures.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
