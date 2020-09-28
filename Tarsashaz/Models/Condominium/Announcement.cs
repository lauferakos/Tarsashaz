using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Models.Condominiums
{
    public class Announcement
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public Range Range { get; set; }
        public DateTime Date { get; set; }
        public Models.Condominiums.Priority Priority { get; set; }
        public string Text { get; set; }
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }

    }
}
