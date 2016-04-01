using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AgencyDto
    {
        public AgencyDto(Agency entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public AgencyDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
