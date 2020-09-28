using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;
using Tarsashaz.Models.Flats;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Models.Users
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public Role Role { get; set; }
        public string Phone { get; set; }
        public ICollection<Flat> Flats { get; set; }
        public ICollection<FlatBill> FlatBills { get; set; }
    }
}
