using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.DAL.Repositories
{
    public class BillPictureRepository : IBillPictureRepository
    {
        private readonly CondominiumDbContext db;

        public BillPictureRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public BillPicture Delete(int id)
        {
            BillPicture deleted = db.BillPictures.Find(id);
            db.BillPictures.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public BillPicture Find(int id)
        {
            return db.BillPictures.Find(id);
        }

        public BillPicture Insert(BillPicture i)
        {
            db.BillPictures.Add(i);
            db.SaveChanges();
            return i;
        }

        public BillPicture Update(BillPicture u, int id)
        {
            BillPicture updated = db.BillPictures.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
