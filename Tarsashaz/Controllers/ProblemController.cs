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
    public class ProblemController : ControllerBase
    {
        private readonly IProblemRepository repository;

        public ProblemController(IProblemRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public Problem Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public Problem Insert([FromBody] Problem p)
        {
            return repository.Insert(p);
        }

        [HttpPut("{id}")]
        public Problem Update(int id, [FromBody] Problem p)
        {
            return repository.Update(p, id);
        }

        [HttpDelete("{id}")]
        public Problem Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
