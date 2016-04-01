using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class AccountManager: Person
    {
        public AccountManager()
        {
            this.Recruiters = new HashSet<Recruiter>();
            this.Jobs = new HashSet<Job>();
        }

        public ICollection<Recruiter> Recruiters { get; set; }
        public ICollection<Job> Jobs { get; set; }

        [ForeignKey("Agency")]
        public int AgnecyId { get; set; }

        public Agency Agency { get; set; }


    }
}