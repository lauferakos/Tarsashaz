﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tarsashaz.Models.Users
{
    public class SocialUser
    {
        public string Provider { get; set; }
        public string Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string? Token { get; set; }
        public string? IdToken { get; set; }
    }
}
