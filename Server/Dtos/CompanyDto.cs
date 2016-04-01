using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CompanyDto
    {
        public CompanyDto(Company entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public CompanyDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
