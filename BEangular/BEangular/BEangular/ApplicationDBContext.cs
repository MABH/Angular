using BEangular.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BEangular
{
    public class ApplicationDBContext:DbContext
    {
        public DbSet<Employee> Employee { get; set; }

        public ApplicationDBContext()
        {

        }
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;DataBase=DBemployee;Uid=root;Pwd=;");
            }
        }
    }
}

