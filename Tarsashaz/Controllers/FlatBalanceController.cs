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
    public class FlatBalanceController : ControllerBase
    {
        private readonly IFlatBalanceRepository repository;

        public FlatBalanceController(IFlatBalanceRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public FlatBalance Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost("{flatid}")]
        public FlatBalance Insert([FromBody] FlatBalance fb,int flatid)
        {
            fb.FlatId = flatid;
            return repository.Insert(fb);
        }

        [HttpPut("{id}")]
        public FlatBalance Update(int id, [FromBody] FlatBalance fb)
        {
            fb.Id = id;
            return repository.Update(fb, id);
        }

        [HttpDelete("{id}")]
        public FlatBalance Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
