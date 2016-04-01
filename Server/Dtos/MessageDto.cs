using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class MessageDto
    {
        public MessageDto(Message entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public MessageDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
