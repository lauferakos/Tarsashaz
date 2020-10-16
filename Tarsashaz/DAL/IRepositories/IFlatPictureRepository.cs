using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Pictures;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IFlatPictureRepository
    {
        public FlatPicture Insert(FlatPicture i);
        public FlatPicture Update(FlatPicture u, int id);

        public FlatPicture Delete(int id);
        public FlatPicture Find(int id);

        public string UpdateUrl(string url, int id);

        public string FindByUrl(string url);
    }
}
