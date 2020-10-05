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
    public class FlatBillController : ControllerBase
    {
        private readonly IFlatBillRepository repository;

        public FlatBillController(IFlatBillRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public FlatBill Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public FlatBill Insert([FromBody] FlatBill fb)
        {
            fb.DestAddress = null;
            fb.Flat = null;
            fb.User = null;
            return repository.Insert(fb);
        }

        [HttpPut("{id}")]
        public FlatBill Update(int id, [FromBody] FlatBill fb)
        {
            return repository.Update(fb, id);
        }

        [HttpDelete("{id}")]
        public FlatBill Delete(int id)
        {
            return repository.Delete(id);
        }

    }
}
