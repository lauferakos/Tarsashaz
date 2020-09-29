using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.Models.Pictures
{
    public class FlatPicture:Picture
    {
        public int? FlatDataId { get; set; }
        public FlatData FlatData { get; set; }
    }
}
