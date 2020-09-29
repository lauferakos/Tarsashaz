using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.DAL.IRepositories
{
    public interface IAnnouncementRepository
    {
        public Announcement Insert(Announcement i);
        public Announcement Update(Announcement u, int id);

        public Announcement Delete(int id);
        public Announcement Find(int id);
    }
}
