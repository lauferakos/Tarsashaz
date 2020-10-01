using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProviderRepository : ControllerBase
    {
        private readonly IProviderRepository repository;
        public ProviderRepository(IProviderRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public Provider Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public Provider Insert([FromBody] Provider p)
        {
            return repository.Insert(p);
        }

        [HttpPut("{id}")]
        public Provider Update(int id, [FromBody] Provider p)
        {
            return repository.Update(p, id);
        }

        [HttpDelete("{id}")]
        public Provider Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
