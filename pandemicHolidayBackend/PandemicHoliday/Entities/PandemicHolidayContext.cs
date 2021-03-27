using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PandemicHoliday.Entities.Models;

namespace PandemicHoliday.Entities
{
    public class PandemicHolidayContext : DbContext
    {
        public PandemicHolidayContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
