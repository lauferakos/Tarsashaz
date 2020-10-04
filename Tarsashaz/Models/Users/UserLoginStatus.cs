using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tarsashaz.Models.Users
{
    public class UserLoginStatus
    {
        public bool FirstLogin { get; set; }
        public User User { get; set; }
    }
}
