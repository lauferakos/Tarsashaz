using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tarsashaz.Models.Bills
{
    public class BillDate
    {
        public int Id { get; set; }
        public int BillId { get; set; }
        public Bill Bill { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime PayoffStart { get; set; }
        public DateTime PayoffEnd { get; set; }
        public DateTime Deadline { get; set; }
    }
}
