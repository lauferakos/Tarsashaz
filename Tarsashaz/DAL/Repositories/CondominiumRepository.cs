using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Condominiums;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.Repositories
{
    public class CondominiumRepository : ICondominiumRepository
    {
        private readonly CondominiumDbContext db;

        public CondominiumRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public Condominium Delete(int id)
        {
            Condominium deleted = db.Condominiums.Find(id);
            db.Condominiums.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public Condominium Find(int flatId)
        {
            Flat result = db.Flats.FirstOrDefault(f => f.Id == flatId);
            if(result == null)
            {
                return null;
            }
            return db.Condominiums
                .Include(c => c.Address)
                .Include(c => c.Bills).ThenInclude(b =>b.BillDate)
                .Include(c => c.Bills).ThenInclude(b => b.Provider).ThenInclude(p =>p.Address)
                .Include(c => c.Bills).ThenInclude(b => b.DestAddress)
                .Include(c => c.Flats).ThenInclude(f => f.Address)
                .Include(c => c.Flats).ThenInclude(f => f.Bills).ThenInclude(b => b.BillDate)
                .Include(c => c.Problems)
                .FirstOrDefault(c =>c.Id == result.CondominiumId);
        }

        public List<Condominium> FindAllWithAddress()
        {
            return db.Condominiums.Include(c => c.Address).ToList();
        }

        public Condominium FindByCrId(int crId)
        {
            return db.Condominiums
                 .Include(c => c.Address)
                 .Include(c => c.Announcements).ThenInclude(a => a.Sender)
                 .Include(c => c.Bills).ThenInclude(b => b.BillDate)
                 .Include(c => c.Bills).ThenInclude(b => b.Provider).ThenInclude(p => p.Address)
                 .Include(c => c.Bills).ThenInclude(b => b.DestAddress)
                 .Include(c => c.Flats).ThenInclude(f => f.Address)
                 .Include(c => c.Flats).ThenInclude(f => f.Bills).ThenInclude(b => b.BillDate)
                 .Include(c => c.Problems)
                 .FirstOrDefault(c => c.CommonRepresentativeId == crId);
        }


        public Condominium Insert(Condominium i)
        {
            db.Condominiums.Add(i);
            db.SaveChanges();
            return i;
        }

        public Condominium Update(Condominium u, int id)
        {
            Condominium updated = db.Condominiums.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
