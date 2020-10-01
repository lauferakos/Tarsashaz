using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlatDataController : ControllerBase
    {
        private readonly IFlatDataRepository repository;
        public FlatDataController(IFlatDataRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public FlatData Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public FlatData Insert([FromBody] FlatData fd)
        {
            return repository.Insert(fd);
        }

        [HttpPut("{id}")]
        public FlatData Update(int id, [FromBody] FlatData fd)
        {
            return repository.Update(fd, id);
        }

        [HttpDelete("{id}")]
        public FlatData Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
