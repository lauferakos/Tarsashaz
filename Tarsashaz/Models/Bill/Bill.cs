using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Pictures;
using Tarsashaz.Models.Users;

namespace Tarsashaz.Models.Bills
{
    public abstract class Bill
    {
        public int Id { get; set; }
        public BillType Type { get; set; }
        public int PictureId { get; set; }
        public BillPicture Picture { get; set; }
        public int ProviderId { get; set; }
        public Provider Provider { get; set; }
        public BillDate BillDateId { get; set; }
        public BillDate BillDate { get; set; }
        public int Amount { get; set; }
        public bool IsPaid { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
