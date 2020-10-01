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
    public class CondominiumBillController : ControllerBase
    {
        private readonly ICondominiumBillRepository repository;

        public CondominiumBillController(ICondominiumBillRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public CondominiumBill Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public CondominiumBill Insert([FromBody] CondominiumBill cb)
        {
            return repository.Insert(cb);
        }

        [HttpPut("{id}")]
        public CondominiumBill Update(int id, [FromBody] CondominiumBill cb)
        {
            return repository.Update(cb, id);
        }

        [HttpDelete("{id}")]
        public CondominiumBill Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
