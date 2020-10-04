using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.DAL.Repositories
{
    public class AnnouncementRepository : IAnnouncementRepository
    {
        private readonly CondominiumDbContext db;

        public AnnouncementRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public Announcement Delete(int id)
        {
            Announcement deleted = db.Announcements.Find(id);
            db.Announcements.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public Announcement Find(int id)
        {
            return db.Announcements.Find(id);
        }

        public Announcement Insert(Announcement i)
        {
            Condominium result = db.Condominiums.FirstOrDefault(c => c.CommonRepresentativeId == i.SenderId);
            if (result != null)
            {
                i.CondominiumId = result.Id;
                db.Announcements.Add(i);
                db.SaveChanges();
                return i;
            }
            else return null;
        }

        public Announcement Update(Announcement u, int id)
        {
            Announcement updated = db.Announcements.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
