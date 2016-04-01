using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class MessageAddOrUpdateResponseDto: MessageDto
    {
        public MessageAddOrUpdateResponseDto(Message entity)
            :base(entity)
        {

        }
    }
}
