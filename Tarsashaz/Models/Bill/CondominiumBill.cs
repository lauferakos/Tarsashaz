using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.Models.Bills
{
    public class CondominiumBill : Bill
    {
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }
        public int? DestAddressId { get; set; }
        public CondominiumAddress DestAddress { get; set; }
    }
}
