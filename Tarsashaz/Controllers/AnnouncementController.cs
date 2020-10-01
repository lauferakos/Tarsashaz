using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnnouncementController : ControllerBase
    {
        private readonly IAnnouncementRepository repository;

        public AnnouncementController(IAnnouncementRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public Announcement Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public Announcement Insert([FromBody] Announcement a)
        {
            return repository.Insert(a);
        }

        [HttpPut("{id}")]
        public Announcement Update(int id, [FromBody] Announcement a)
        {
            return repository.Update(a, id);
        }

        [HttpDelete("{id}")]
        public Announcement Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
