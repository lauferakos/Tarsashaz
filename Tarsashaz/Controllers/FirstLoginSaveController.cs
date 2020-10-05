using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Flats;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FirstLoginSaveController :ControllerBase
    {
        private readonly IUserRepository repository;
        private readonly IFlatRepository flatRepository;
        public FirstLoginSaveController(IUserRepository _repository, IFlatRepository _flatRepository)
        {
            repository = _repository;
            flatRepository = _flatRepository;
        }

        [HttpPost]
        public User FirstLoginSave([FromBody] User u)
        {
            User result = repository.Find(u.Id);
            if (result == null)
            {
                return null;
            }
            else
            {
                foreach (Flat flat in u.Flats)
                {
                    flat.UserId = u.Id;
                    flat.CondominiumId = flatRepository.GetCondominiumIdByFlat(flat);
                    //flatRepository.Insert(flat);
                }
                return repository.Update(u, result.Id);

            }
        }
    }
}
