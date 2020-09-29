using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;

namespace Tarsashaz.Models.Bills
{
    public class Provider
    {
        [Key]
        public int Id { get; set; }
        public ProviderAddress Address { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public int AccountNum { get; set; }
    }
}
