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
    public class ProblemPictureController : ControllerBase
    {
        private readonly IProblemPictureRepository repository;
        public ProblemPictureController(IProblemPictureRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public ProblemPicture Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public ProblemPicture Insert([FromBody] ProblemPicture pp)
        {
            return repository.Insert(pp);
        }

        [HttpPut("{id}")]
        public ProblemPicture Update(int id, [FromBody] ProblemPicture pp)
        {
            return repository.Update(pp, id);
        }

        [HttpDelete("{id}")]
        public ProblemPicture Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
