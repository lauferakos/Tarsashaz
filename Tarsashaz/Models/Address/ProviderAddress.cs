using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.Models.Addresses
{
    public class ProviderAddress : Address
    {
        public int ProviderId { get; set; }
        public Provider Provider { get; set; }
    }
}
