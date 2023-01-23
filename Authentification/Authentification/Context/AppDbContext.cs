using Authentification.models;
using Microsoft.EntityFrameworkCore;

namespace Authentification.Context
{
    public class AppDbContext : DbContext 
    {
        public AppDbContext( DbContextOptions<AppDbContext>options):base(options)
        {

        }
        public DbSet<user> users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<user>().ToTable("users");
        }
    }
}
