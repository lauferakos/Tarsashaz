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
    public class BillDateController : ControllerBase
    {
        private readonly IBillDateRepository repository;

        public BillDateController(IBillDateRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public BillDate Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public BillDate Insert([FromBody] BillDate bd)
        {
            return repository.Insert(bd);
        }

        [HttpPut("{id}")]
        public BillDate Update(int id, [FromBody] BillDate bd)
        {
            return repository.Update(bd, id);
        }

        [HttpDelete("{id}")]
        public BillDate Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
