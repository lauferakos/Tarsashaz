using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CondominiumController : ControllerBase
    {
        private readonly ICondominiumRepository condominiumRepository;
        private readonly IAnnouncementRepository announcementRepository;
        private readonly IProblemRepository problemRepository;
        private readonly ICondominiumAddressRepository condominiumAddressRepository;

        public CondominiumController(ICondominiumRepository cr, IAnnouncementRepository ar, IProblemRepository pr, ICondominiumAddressRepository car)
        {
            condominiumRepository = cr;
            announcementRepository = ar;
            problemRepository = pr;
            condominiumAddressRepository = car;
        }

        [HttpGet("condominiums/{id}")]
        public Condominium FindCondominium(int id)
        {
            return condominiumRepository.Find(id);
        }

        [HttpGet("announcements/{id}")]
        public Announcement FindAnnouncement(int id)
        {
            return announcementRepository.Find(id);
        }

        [HttpGet("problems/{id}")]
        public Problem FindProblem(int id)
        {
            return problemRepository.Find(id);
        }

        [HttpGet("condominiumaddresses/{id}")]
        public CondominiumAddress FindCondominiumAddress(int id)
        {
            return condominiumAddressRepository.Find(id);
        }
    }
}
