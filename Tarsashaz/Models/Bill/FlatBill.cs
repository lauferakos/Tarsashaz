using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.Models.Bills
{
    public class FlatBill : Bill
    {
        public int FlatId { get; set; }
        public Flat Flat { get; set; }
        public int? DestAddressId { get; set; }
        public FlatAddress DestAddress { get; set; }
    }
}
