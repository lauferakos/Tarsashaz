using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.Models.Addresses
{
    public class FlatAddress : Address
    {
        public int FlatId { get; set; }
        public Flat Flat { get; set; }
    }
}
