using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BillPictureController : ControllerBase
    {
        private readonly IBillPictureRepository repository;
        public BillPictureController(IBillPictureRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public BillPicture Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public BillPicture Insert([FromBody] BillPicture bp)
        {
            return repository.Insert(bp);
        }

        [HttpPut("{id}")]
        public BillPicture Update(int id, [FromBody] BillPicture bp)
        {
            return repository.Update(bp, id);
        }

        [HttpDelete("{id}")]
        public BillPicture Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
