using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Flats;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository repository;
        private readonly IFlatRepository flatRepository;

        public UserController(IUserRepository _repository, IFlatRepository _flatrepository)
        {
            repository = _repository;
            flatRepository = _flatrepository;
        }



        [HttpGet("{id}")]
        public User Find(int id)
        {
            return repository.Find(id);
        }

        [HttpGet("flats/{userid}")]
        public List<Flat> GetFlatsByUserId(int userid)
        {
            return repository.GetFlatsByUserId(userid);
        }
        [HttpPost]
        public User Insert([FromBody] User u)
        {
            return repository.Insert(u);
        }

        [HttpPut("{id}")]
        public User Update(int id, [FromBody] User u)
        {
            return repository.Update(u, id);
        }

        [HttpDelete("{id}")]
        public User Delete(int id)
        {
            return repository.Delete(id);
        }
     
        [HttpPost("balance/{userid}")]
        public int BalanceChanged([FromBody]int newBalance, int userid)
        {
            User u = repository.Find(userid);
            u.Balance = newBalance;
            repository.Update(u, userid);
            return newBalance;
        }
        [HttpPost("login")]
        public UserLoginStatus Login([FromBody] SocialUser u)
        {
            User result = repository.FindByEmail(u.Email);
            if (result == null)
            {
                User inserted = repository.Insert(new Models.Users.User {Name = u.Name, Email = u.Email, Token = u.Token, Role = Role.resident});
               
                return new UserLoginStatus { FirstLogin = true, User = inserted };
            }
            if(result.Flats.Count == 0)
            {
                return new UserLoginStatus { FirstLogin = true, User = result };
            }
            else return new UserLoginStatus { FirstLogin = false, User = result};
        }




       
    }
}
