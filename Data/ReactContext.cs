using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using React.Modal;

namespace React.Models
{
    public class ReactContext : DbContext
    {
        public ReactContext (DbContextOptions<ReactContext> options)
            : base(options)
        {
        }

        public DbSet<React.Modal.Cliente> Cliente { get; set; }
    }
}
