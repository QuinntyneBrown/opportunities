using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class RecruiterDto
    {
        public RecruiterDto(Recruiter entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public RecruiterDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
