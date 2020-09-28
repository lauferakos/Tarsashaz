using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.Models.Addresses
{
    public class CondominiumAddress : Address
    {
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }
    }
}
