using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IRecruiterService
    {
        RecruiterAddOrUpdateResponseDto AddOrUpdate(RecruiterAddOrUpdateRequestDto request);
        ICollection<RecruiterDto> Get();
        RecruiterDto GetById(int id);
        dynamic Remove(int id);
    }
}
