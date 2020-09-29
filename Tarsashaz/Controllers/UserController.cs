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
        private readonly IUserRepository userRepository;

        public UserController(IUserRepository ur)
        {
            userRepository = ur;
        }

        [HttpGet("users/{id}")]
        public User FindUser(int id)
        {
            return userRepository.Find(id);
        }
    }
}
