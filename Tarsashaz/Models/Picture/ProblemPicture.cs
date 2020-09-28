using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.Models.Pictures
{
    public class ProblemPicture:Picture
    {
        public int ProblemId { get; set; }
        public Problem Problem { get; set; }
    }
}
