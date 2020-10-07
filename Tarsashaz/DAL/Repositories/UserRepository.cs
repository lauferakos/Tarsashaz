using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.DbContexts;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Users;

namespace Tarsashaz.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly CondominiumDbContext db;

        public UserRepository(CondominiumDbContext _db)
        {
            db = _db;
        }

        public User Delete(int id)
        {
            User deleted = db.Users.Find(id);
            db.Users.Remove(deleted);
            db.SaveChanges();
            return deleted;
        }

        public User Find(int id)
        {
            return db.Users.Find(id);
        }

        public User FindByEmail(string email)
        {
            return db.Users
                .Include(u => u.Flats).ThenInclude(f => f.Address)
                .Include(u => u.Flats).ThenInclude(f => f.Balances)
                .Include(u => u.Flats).ThenInclude(f => f.Bills).ThenInclude(b => b.BillDate)
                .Include(u => u.Flats).ThenInclude(f => f.Bills).ThenInclude(b => b.Provider).ThenInclude(p => p.Address)
                .Include(u => u.Flats).ThenInclude(f => f.Bills).ThenInclude(b => b.DestAddress)
                .Include(u => u.Flats).ThenInclude(f => f.Bills).ThenInclude(b => b.User)
                .Include(u => u.Flats).ThenInclude(f => f.FlatDatas).ThenInclude(fd => fd.Pics)
                .FirstOrDefault(u => u.Email == email);
        }

        public User Insert(User i)
        {
            db.Users.Add(i);
            db.SaveChanges();
            return i;
        }

        public User Update(User u, int id)
        {
            User updated = db.Users.Find(id);
            updated.Phone = u.Phone;
            updated.Token = u.Token;
            updated.Role = u.Role;
            //updated.Flats = u.Flats;
            db.SaveChanges();
            updated.Flats = u.Flats;
            return updated;
        }
    }
}
