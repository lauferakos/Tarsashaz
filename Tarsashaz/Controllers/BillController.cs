using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BillController : ControllerBase
    {
        private readonly IFlatBillRepository flatBillRepository;
        private readonly ICondominiumBillRepository condominiumBillRepository;
        private readonly IProviderRepository providerRepository;
        private readonly IBillDateRepository billDateRepository;
        private readonly IProviderAddressRepository providerAddressRepository;

        public BillController(
            IFlatBillRepository br, 
            ICondominiumBillRepository cr ,
            IProviderRepository pr, 
            IBillDateRepository bdr,
            IProviderAddressRepository par
            )
        {
            flatBillRepository = br;
            condominiumBillRepository = cr;
            providerRepository = pr;
            billDateRepository = bdr;
            providerAddressRepository = par;
        }

        [HttpGet("flatbills/{id}")]
        public FlatBill FindFlatBill(int id)
        {
            return flatBillRepository.Find(id);
        }

        [HttpGet("condominiumbills/{id}")]
        public CondominiumBill FindCondominiumBill(int id)
        {
            return condominiumBillRepository.Find(id);
        }

        [HttpGet("providers/{id}")]
        public Provider FindProvider(int id)
        {
            return providerRepository.Find(id);
        }

        [HttpGet("billdates/{id}")]
        public BillDate FindBillDate(int id)
        {
            return billDateRepository.Find(id);
        }

        [HttpGet("provideraddresses/{id}")]
        public ProviderAddress FindProviderAddress(int id)
        {
            return providerAddressRepository.Find(id);
        }


    }
}
