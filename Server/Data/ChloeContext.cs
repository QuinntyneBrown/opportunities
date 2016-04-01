using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System.Data.Entity;

namespace Chloe.Server.Data
{
    public class ChloeContext: DbContext, IDbContext
    {
        public ChloeContext()
            : base(nameOrConnectionString: "ChloeContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Recruiter> Recruiters { get; set; }
        public DbSet<Agency> Agencies { get; set; }
        public DbSet<AccountManager> AccountManagers { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<Company> Companies { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
     
        } 
    }
}
