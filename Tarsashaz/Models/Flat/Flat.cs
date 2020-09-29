using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Bills;
using Tarsashaz.Models.Condominiums;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Models.Flats
{
    public class Flat
    {
        [Key]
        public int Id { get; set; }
        public int AddressId { get; set; }
        public FlatAddress Address { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<FlatBill> Bills { get; set; }
        public ICollection<FlatData> FlatDatas { get; set; }
        public ICollection<FlatBalance> Balances { get; set; }
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }

    }
}
