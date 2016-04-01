using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IJobService
    {
        JobAddOrUpdateResponseDto AddOrUpdate(JobAddOrUpdateRequestDto request);
        ICollection<JobDto> Get();
        JobDto GetById(int id);
        dynamic Remove(int id);
    }
}
