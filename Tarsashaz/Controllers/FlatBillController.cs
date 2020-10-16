using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Bills;
using Tarsashaz.Services;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlatBillController : ControllerBase
    {
        private readonly IFlatBillRepository repository;
        private readonly BillService service;

        public FlatBillController(IFlatBillRepository _repository, BillService billService)
        {
            repository = _repository;
            service = billService;
        }

        [HttpGet("{id}")]
        public FlatBill Find(int id)
        {
            return repository.Find(id);
        }
        [HttpPost("{addbills}")]
        public List<FlatBill> AddBills([FromBody] List<FlatBill> bills)
        {
            List<FlatBill> flatBills = new List<FlatBill>();
            foreach(FlatBill b in bills)
            {
                flatBills.Add(this.Insert(b));
            }
            return flatBills;
        }

        [HttpPost("new")]
        public FlatBill AddBill([FromBody] FlatBill fb)
        {
            return service.AddBill(fb);
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
