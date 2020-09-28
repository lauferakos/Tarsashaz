using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.Models.Condominiums
{
    public class Problem
    {
        public int Id { get; set; }
        public Models.Condominiums.ProblemType Type { get; set; }
        public string Text { get; set; }
        public ICollection<ProblemPicture> Pictures { get; set; }
        public int CondominiumId { get; set; }
        public Condominium Condominium { get; set; }
    }
}
