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
    public class FlatAddressController : ControllerBase
    {
        private readonly IFlatAddressRepository repository;
        public FlatAddressController(IFlatAddressRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public FlatAddress Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public FlatAddress Insert([FromBody] FlatAddress fa)
        {
            return repository.Insert(fa);
        }

        [HttpPut("{id}")]
        public FlatAddress Update(int id, [FromBody] FlatAddress fa)
        {
            return repository.Update(fa, id);
        }

        [HttpDelete("{id}")]
        public FlatAddress Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
