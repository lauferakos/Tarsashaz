using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlatController : ControllerBase
    {
        private readonly IFlatRepository repository;


        public FlatController (IFlatRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public Flat Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public Flat Insert([FromBody] Flat f)
        {
            return repository.Insert(f);
        }

        [HttpPut("{id}")]
        public Flat Update(int id, [FromBody] Flat f)
        {
            return repository.Update(f, id);
        }

        [HttpGet("flats/{conId}")]
        public List<Flat> FindFlatsInCondominium(int conId)
        {
            return repository.FindFlatsInCondominium(conId);
        }

        [HttpDelete("{id}")]
        public Flat Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
