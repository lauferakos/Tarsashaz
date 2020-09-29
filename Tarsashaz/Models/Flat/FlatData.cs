using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Flats;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.Models.Flats
{
    public class FlatData
    {
        [Key]
        public int Id { get; set; }
        public Models.Flats.FlatDataType Type { get; set; }
        public string Text { get; set; }
        public int Value { get; set; }
        public int FlatId { get; set; }
        public Flat Flat { get; set; }
        public ICollection<FlatPicture> Pics { get; set; }
    }
}
