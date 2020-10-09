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

        [HttpGet("{conid}")]
        public List<Problem> FindConId(int conid)
        {
            return repository.FindByConId(conid);
        }

        [HttpPost("{conid}")]
        public Problem Insert([FromBody] Problem p, int conid)
        {
            p.Id = 0;
            if (conid != 0)
            {
                p.CondominiumId = conid;
                return repository.Insert(p);
            }
            else return null;
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
