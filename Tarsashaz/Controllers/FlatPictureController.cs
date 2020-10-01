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
    public class FlatPictureController : ControllerBase
    {
        private readonly IFlatPictureRepository repository;
        public FlatPictureController(IFlatPictureRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public FlatPicture Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public FlatPicture Insert([FromBody] FlatPicture fp)
        {
            return repository.Insert(fp);
        }

        [HttpPut("{id}")]
        public FlatPicture Update(int id, [FromBody] FlatPicture fp)
        {
            return repository.Update(fp, id);
        }

        [HttpDelete("{id}")]
        public FlatPicture Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
