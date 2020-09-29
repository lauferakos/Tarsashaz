using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Tarsashaz.Models.Addresses
{
    public abstract class Address
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int PostCode { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public int Number { get; set; }
        public int Floor { get; set; }
        public int Door { get; set; }
    }
}
