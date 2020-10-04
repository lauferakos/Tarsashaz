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

        public Flat Insert(Flat i)
        {
            CondominiumAddress resultCA = db.CondominiumAddresses.SingleOrDefault
                (ca => ca.PostCode == i.Address.PostCode && ca.City == i.Address.City && ca.Street == i.Address.Street && ca.Number == i.Address.Number);

            i.CondominiumId = resultCA.CondominiumId;

            FlatAddress resultFA = db.FlatAddresses.SingleOrDefault(
                fa => fa.PostCode == i.Address.PostCode && fa.City == i.Address.City && fa.Street == i.Address.Street && fa.Number == i.Address.Number
                );

            if(resultFA != null)
            {
                i.AddressId = resultFA.Id;
            }
            else
            {
                db.FlatAddresses.Add(new FlatAddress
                {
                    PostCode = i.Address.PostCode,
                    City = i.Address.City,
                    Street = i.Address.Street,
                    Number = i.Address.Number,
                    Floor = i.Address.Floor,
                    Door = i.Address.Door,
                    FlatId = i.Id
                });
                FlatAddress result = db.FlatAddresses.FirstOrDefault(fa => fa.FlatId == i.Id);
                i.AddressId = result.Id;
            }
            db.Flats.Add(i);
            db.SaveChanges();
            return i;
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
