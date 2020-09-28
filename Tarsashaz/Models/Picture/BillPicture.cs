using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Bills;

namespace Tarsashaz.Models.Pictures
{
    public class BillPicture : Picture
    {
        public int BillId { get; set; }
        public Bill Bill { get; set; }
    }
}
