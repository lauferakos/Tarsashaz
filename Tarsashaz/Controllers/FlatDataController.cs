using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlatDataController : ControllerBase
    {
        private readonly IFlatDataRepository repository;
        private readonly IFlatPictureRepository flatPictureRepository;
        public FlatDataController(IFlatDataRepository _repository, IFlatPictureRepository _flatPictureRepository)
        {
            repository = _repository;
            flatPictureRepository = _flatPictureRepository;
        }

        [HttpGet("{id}")]
        public FlatData Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost("{flatid}")]
        public FlatData Insert([FromBody] FlatData fd, int flatid)
        {
            fd.FlatId = flatid;
            return repository.Insert(fd);
        }

        [HttpPut("{id}")]
        public FlatData Update(int id, [FromBody] FlatData fd)
        {
            return repository.Update(fd, id);
        }

        [HttpDelete("{id}")]
        public FlatData Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
