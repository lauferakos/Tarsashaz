using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository repository;

        public UserController(IUserRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("users/{id}")]
        public User FindUser(int id)
        {
            return repository.Find(id);
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
    }
}
