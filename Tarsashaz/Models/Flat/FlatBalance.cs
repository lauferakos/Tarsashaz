﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.Models.Flats
{
    public class FlatBalance
    {
        [Key]
        public int Id { get; set; }
        public BillType Type { get; set; }
        public int Amount { get; set; }
        public int FlatId { get; set; }
        public Flat Flat { get; set; }
    }
}