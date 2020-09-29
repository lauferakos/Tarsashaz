using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Bills;
using Tarsashaz.Models.Flats;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Models.Condominiums
{
    public class Condominium
    {
        [Key]
        public int Id { get; set; }
        public int? CommonRepresentativeId { get; set; }
        public User CommonRepresentative { get; set; }
        public CondominiumAddress Address { get; set; }
        public int CommonCharge { get; set; }
        public ICollection<CondominiumBill> Bills { get; set; }
        public ICollection<Flat> Flats { get; set; }
        public ICollection<Announcement> Announcements { get; set; }
        public ICollection<Problem> Problems { get; set; }
    }
}
