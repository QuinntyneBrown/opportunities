using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IMessageService
    {
        MessageAddOrUpdateResponseDto AddOrUpdate(MessageAddOrUpdateRequestDto request);
        ICollection<MessageDto> Get();
        MessageDto GetById(int id);
        dynamic Remove(int id);
    }
}
