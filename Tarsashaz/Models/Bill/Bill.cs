using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Pictures;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Models.Bills
{
    public abstract class Bill
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public BillType Type { get; set; }
        public BillPicture Picture { get; set; }
        public int? ProviderId { get; set; }
        public Provider Provider { get; set; } 
        public BillDate BillDate { get; set; }
        [Required]
        public int Amount { get; set; }
        [Required]
        public bool IsPaid { get; set; }
        public int? UserId { get; set; }
        public User User { get; set; }
    }
}
