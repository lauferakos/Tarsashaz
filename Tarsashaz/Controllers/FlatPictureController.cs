using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
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
        private IWebHostEnvironment _hostingEnvironment;
        public FlatPictureController(IFlatPictureRepository _repository, IWebHostEnvironment environment)
        {
            repository = _repository;
            _hostingEnvironment = environment;
        }

        [HttpPost]
        [Route("upload")]
        public bool Upload(List<IFormFile> files)
        {
            var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
            string url= null;
            if (!Directory.Exists(uploads))
            {
                Directory.CreateDirectory(uploads);
            }

            foreach (IFormFile file in files)
            {
                if (file.Length > 0)
                {
                    url = "uploads/" + file.FileName;
                    var result = repository.FindByUrl(url);
                    var filePath = Path.Combine(uploads, file.FileName);
                    if (result == null)
                    {
                        using (var fileStream = new FileStream(filePath, FileMode.Create))
                        {
                             file.CopyTo(fileStream);
                        }

                    }

                    
                }
            }
            return true;
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
