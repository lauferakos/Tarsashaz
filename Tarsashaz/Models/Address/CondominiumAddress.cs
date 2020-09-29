using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.Models.Addresses
{
    public class CondominiumAddress : Address
    {
        [Required]
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }

        public ICollection<CondominiumBill> Bills { get; set; }
    }
}
