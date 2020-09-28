using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.Models.Bills
{
    public class Provider
    {
        public int Id { get; set; }
        public int AddressId { get; set; }
        public ProviderAddress Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public int AccountNum { get; set; }
    }
}
