using Microsoft.EntityFrameworkCore;
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

        public List<Announcement> FindAnnouncementsByFlatId(int flatid)
        {
            var conId = db.Flats.FirstOrDefault(f => f.Id == flatid).CondominiumId;
            if (conId == 0)
                return null;
            return db.Announcements.Include(a => a.Sender).Where(a => a.CondominiumId == conId).ToList();
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
