using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IProblemPictureRepository
    {
        public ProblemPicture Insert(ProblemPicture i);
        public ProblemPicture Update(ProblemPicture u, int id);

        public ProblemPicture Delete(int id);
        public ProblemPicture Find(int id);
    }
}
