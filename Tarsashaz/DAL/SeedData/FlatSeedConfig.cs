using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.Models.Flats;

namespace Tarsashaz.DAL.SeedData
{
    public class FlatSeedConfig : IEntityTypeConfiguration<Flat>
    {
        Random rand = new Random();
        public Flat[] GenerateFlat()
        {
            Flat[] flats = new Flat[10];
            for(int i=0;i<10;i++)
            {
                flats[i] = new Flat
                {
                    Id = i + 5,
                    AddressId = 1,
                    UserId = rand.Next(1, 5),
                    CondominiumId = 1
                };
            }
            return flats;
        }
        public void Configure(EntityTypeBuilder<Flat> builder)
        {
            Flat[] flats = GenerateFlat();
            builder.HasData(
                    flats
                );
        }
    }
}
