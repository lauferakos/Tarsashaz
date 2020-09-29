using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IBillPictureRepository
    {
        public BillPicture Insert(BillPicture i);
        public BillPicture Update(BillPicture u, int id);

        public BillPicture Delete(int id);
        public BillPicture Find(int id);
    }
}
