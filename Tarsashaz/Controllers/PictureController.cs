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
    public class PictureController : ControllerBase
    {
        private readonly IFlatPictureRepository flatPictureRepository;
        private readonly IBillPictureRepository billPictureRepository;
        private readonly IProblemPictureRepository problemPictureRepository;

        public PictureController(IFlatPictureRepository fpr, IBillPictureRepository bpr, IProblemPictureRepository ppr)
        {
            flatPictureRepository = fpr;
            billPictureRepository = bpr;
            problemPictureRepository = ppr;
        }

        [HttpGet("flatpictures/{id}")]
        public FlatPicture FindFlatPicture(int id)
        {
            return flatPictureRepository.Find(id);
        }

        [HttpGet("billpictures/{id}")]
        public BillPicture FindBillPicture(int id)
        {
            return billPictureRepository.Find(id);
        }

        [HttpGet("problempictures/{id}")]
        public ProblemPicture FindProblemPicture(int id)
        {
            return problemPictureRepository.Find(id);
        }
    }
}
