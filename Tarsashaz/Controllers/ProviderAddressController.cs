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
    public class ProviderAddressController : ControllerBase
    {
        private readonly IProviderAddressRepository repository;
        public ProviderAddressController(IProviderAddressRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public ProviderAddress Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public ProviderAddress Insert([FromBody] ProviderAddress pa)
        {
            return repository.Insert(pa);
        }

        [HttpPut("{id}")]
        public ProviderAddress Update(int id, [FromBody] ProviderAddress pa)
        {
            return repository.Update(pa, id);
        }

        [HttpDelete("{id}")]
        public ProviderAddress Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
