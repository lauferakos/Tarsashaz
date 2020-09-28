using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tarsashaz.Models.Addresses
{
    public abstract class Address
    {
        public int Id { get; set; }
        public int PostCode { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int Number { get; set; }
        public int Floor { get; set; }
        public int Door { get; set; }
    }
}
