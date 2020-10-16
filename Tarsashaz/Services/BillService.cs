using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Bills;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.Services
{
    public class BillService
    {
        private readonly IFlatBillRepository flatBillrepository;
        private readonly IUserRepository userRepository;
        private readonly IFlatRepository flatRepository;
        private readonly IProviderRepository providerRepository;
        private readonly IProviderAddressRepository providerAddressRepository;
        public BillService(IFlatBillRepository _flatBillrepository, IUserRepository _userRepository, IFlatRepository _flatRepository,
            IProviderRepository _providerRepository, IProviderAddressRepository _providerAddressRepository)
        {
            flatBillrepository = _flatBillrepository;
            userRepository = _userRepository;
            flatRepository = _flatRepository;
            providerRepository = _providerRepository;
            providerAddressRepository = _providerAddressRepository;
        }

        public FlatBill AddBill(FlatBill fb)
        {
            Flat result = flatRepository.Find(fb.FlatId);
            fb.DestAddressId = result.AddressId;
            fb.UserId = result.UserId;

            Provider provider = providerRepository.FindByAddress(fb.Provider.Address);
            if (provider == null)
            {
                providerRepository.Insert(fb.Provider);
                Provider inserted = providerRepository.FindByAddress(fb.Provider.Address);
                fb.ProviderId = inserted.Id;
            }
            else {
                fb.ProviderId = provider.Id;
                fb.Provider = null;
                    }
            flatBillrepository.Insert(fb);
            FlatBill insertedBill = flatBillrepository.FindLastBill();
            return insertedBill;
        }
    }
}
