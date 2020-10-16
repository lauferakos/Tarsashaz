using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.Repositories
{
    public class FlatRepository : IFlatRepository
    {
        private readonly CondominiumDbContext db;

        public FlatRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public Flat Delete(int id)
        {
            Flat deleted = db.Flats.Find(id);
            db.Flats.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public Flat Find(int id)
        {
            return db.Flats.Find(id);
        }
        public int GetCondominiumIdByFlat(Flat i)
        {
            CondominiumAddress result = db.CondominiumAddresses.FirstOrDefault
                (ca => ca.PostCode == i.Address.PostCode && ca.City == i.Address.City && ca.Street == i.Address.Street && ca.Number == i.Address.Number);
            if (result != null)
            {
                return result.CondominiumId;
            }
            else return 0;
        }
        public Flat Insert(Flat i)
        {
            CondominiumAddress resultCA = db.CondominiumAddresses.FirstOrDefault
                (ca => ca.PostCode == i.Address.PostCode && ca.City == i.Address.City && ca.Street == i.Address.Street && ca.Number == i.Address.Number);

            if (resultCA != null)
            {
                i.CondominiumId = resultCA.CondominiumId;
            }

            /*FlatAddress resultFA = db.FlatAddresses.FirstOrDefault(
                fa => fa.PostCode == i.Address.PostCode && fa.City == i.Address.City && fa.Street == i.Address.Street && fa.Number == i.Address.Number
                && fa.Floor == i.Address.Floor && fa.Door == i.Address.Door
                );*/

            db.Flats.Add(i);

            db.SaveChanges();
            Flat addedFlat = db.Flats.OrderByDescending(f => f.Id).FirstOrDefault();
            addedFlat.AddressId = db.FlatAddresses.FirstOrDefault(fa => fa.FlatId == addedFlat.Id).Id;
            db.SaveChanges();
            return addedFlat;
        }

        public List<Flat> FindFlatsInCondominium(int conId)
        {
            return db.Flats.Include(f => f.Address).Where(f => f.CondominiumId == conId).ToList();
        }
        public Flat Update(Flat u, int id)
        {
            Flat updated = db.Flats.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
