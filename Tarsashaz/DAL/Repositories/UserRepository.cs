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

        public User Insert(User i)
        {
            db.Users.Add(i);
            db.SaveChanges();
            return i;
        }

        public User Update(User u, int id)
        {
            User updated = db.Users.Find(id);
            updated = u;
            db.SaveChanges();
            return updated;
        }
    }
}
