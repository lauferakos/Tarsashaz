using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Users;

namespace Tarsashaz.DAL.SeedData
{
    public class UserSeedConfig : IEntityTypeConfiguration<User>
    {
        Random rand = new Random();

        public User[] GenerateUser()
        {
            User[] users = new User[10];
            for(int i=0;i<10;i++)
            {
                users[i] = new User
                {
                    Id = i + 2,
                    Name = "TestUser" + i,
                    Email = "testUser" + i + "@gmail.com",
                    Token = "token" + i,
                    Role = rand.Next(0, 1) > 0.5 ? Role.cr : Role.resident,
                    Phone = rand.Next(1000000, 9999999).ToString()
                };
                
            }
            return users;
        }
        public void Configure(EntityTypeBuilder<User> builder)
        {
            User[] users = GenerateUser();
            builder.HasData(
                    users
                );
        }
    }
}
