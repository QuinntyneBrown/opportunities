using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class JobDto
    {
        public JobDto(Job entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public JobDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
