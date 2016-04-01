using Chloe.Server.Models;
using System;
using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class JobDto
    {
        public JobDto(Job entity)
        {
            

            this.Id = entity.Id;
            this.Name = entity.Name;
            this.DatePosted = entity.DatePosted;
            this.Description = entity.Description;
            this.AnnualSalary = entity.AnnualSalary;
            this.HourlySalary = entity.HourlySalary;
            this.JobTypeId = entity.JobTypeId;
            this.CompanyId = entity.CompanyId;
            this.Rating = entity.Rating;

            if (entity.Company != null)
                this.Company = new CompanyDto(entity.Company);

            this.Technologies = new HashSet<TechnologyDto>();

            foreach (var technology in entity.Technologies)
            {
                this.Technologies.Add(new TechnologyDto(technology));
            }
        }

        public JobDto()
        {
            this.Technologies = new HashSet<TechnologyDto>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? DatePosted { get; set; }
        public string Description { get; set; }
        public double? AnnualSalary { get; set; }
        public double? HourlySalary { get; set; }
        public int? JobTypeId { get; set; }
        public int? CompanyId { get; set; }
        public int Rating { get; set; }

        public ICollection<TechnologyDto> Technologies { get; set; }
        public JobTypeDto JobType { get; set; }
        public CompanyDto Company { get; set; }
    }
}
