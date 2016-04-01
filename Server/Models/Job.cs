using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class Job: BaseEntity
    {
        public Job()
        {
            this.Technologies = new HashSet<Technology>();
        }

        public DateTime? DatePosted { get; set; }
        public string Description { get; set; }
        public double? AnnualSalary { get; set; }
        public double? HourlySalary { get; set; }
        [ForeignKey("JobType")]
        public int? JobTypeId { get; set; }
        public JobType JobType { get; set; }
        public int Rating { get; set; }
        public ICollection<Technology> Technologies { get; set; }
    }
}