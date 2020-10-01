using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CondominiumAddressController : ControllerBase
    {
        private readonly ICondominiumAddressRepository repository;
        public CondominiumAddressController(ICondominiumAddressRepository _repository)
        {
            repository = _repository;

        }

        [HttpGet("{id}")]
        public CondominiumAddress Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public CondominiumAddress Insert([FromBody] CondominiumAddress ca)
        {
            return repository.Insert(ca);
        }

        [HttpPut("{id}")]
        public CondominiumAddress Update(int id, [FromBody] CondominiumAddress ca)
        {
            return repository.Update(ca, id);
        }

        [HttpDelete("{id}")]
        public CondominiumAddress Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
