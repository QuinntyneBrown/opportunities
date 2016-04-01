using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Agency: BaseEntity
    {
        public Agency()
        {
            this.Jobs = new HashSet<Job>();
            this.Recruiters = new HashSet<Recruiter>();
            this.AccountManagers = new HashSet<AccountManager>();

        }

        public string PhoneNumber { get; set; }
        public string WebsiteUrl { get; set; }

        public ICollection<Recruiter> Recruiters { get; set; }
        public ICollection<AccountManager> AccountManagers { get; set; }
        public ICollection<Job> Jobs { get; set; }
    }
}