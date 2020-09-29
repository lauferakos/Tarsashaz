using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Models.Condominiums
{
    public class Announcement
    {
        [Key]
        public int Id { get; set; }
        public int? SenderId { get; set; }
        public User Sender { get; set; }
        [Required]
        public Range Range { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public Models.Condominiums.Priority Priority { get; set; }
        [Required]
        public string Text { get; set; }
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }

    }
}
