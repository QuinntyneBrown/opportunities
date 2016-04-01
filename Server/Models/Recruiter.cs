using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class Recruiter: Person
    {
        public Recruiter()
        {
            this.Jobs = new HashSet<Job>();
        }

        [ForeignKey("AccountManager")]
        public int? AccountManagerId { get; set; }
        [ForeignKey("Agency")]
        public int? AgencyId { get; set; }
        public AccountManager AccountManager { get; set; }
        public Agency Agency { get; set; }
        public ICollection<Job> Jobs { get; set; }

    }
}