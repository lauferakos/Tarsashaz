﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Tarsashaz.Models.Pictures
{
    public abstract class Picture
    {
        [Key]
        public int Id { get; set; }
        public string Url { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
    }
}
