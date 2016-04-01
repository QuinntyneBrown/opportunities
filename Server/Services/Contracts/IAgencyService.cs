using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IAgencyService
    {
        AgencyAddOrUpdateResponseDto AddOrUpdate(AgencyAddOrUpdateRequestDto request);
        ICollection<AgencyDto> Get();
        AgencyDto GetById(int id);
        dynamic Remove(int id);
    }
}
