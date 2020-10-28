using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.SeedData;
using Tarsashaz.Models.Flats;
using Tarsashaz.Models.Users;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IUserRepository
    {
        public User Insert(User i);
        public User Update(User u, int id);

        public User Delete(int id);
        public User Find(int id);

        public User FindByEmail(string email);

        public List<Flat> GetFlatsByUserId(int userid);
    }
}
