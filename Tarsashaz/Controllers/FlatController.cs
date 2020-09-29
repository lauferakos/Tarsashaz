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
        private readonly IFlatRepository flatRepository;
        private readonly IFlatDataRepository flatDataRepository;
        private readonly IFlatBalanceRepository flatBalanceRepository;
        private readonly IFlatAddressRepository flatAddressRepository;

        public FlatController (IFlatRepository fr, IFlatDataRepository fdr, IFlatBalanceRepository fbr, IFlatAddressRepository far)
        {
            flatRepository = fr;
            flatDataRepository = fdr;
            flatBalanceRepository = fbr;
            flatAddressRepository = far;
        }

        [HttpGet("flats/{id}")]
        public Flat FindFlat(int id)
        {
            return flatRepository.Find(id);
        }

        [HttpGet("flatdatas/{id}")]
        public FlatData FindFlatData(int id)
        {
            return flatDataRepository.Find(id);
        }

        [HttpGet("flatbalances/{id}")]
        public FlatBalance FindFlatBalance(int id)
        {
            return flatBalanceRepository.Find(id);
        }

        [HttpGet("flataddresses/{id}")]
        public FlatAddress FindFlatAddress(int id)
        {
            return flatAddressRepository.Find(id);
        }
    }
}
