using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface ICompanyService
    {
        CompanyAddOrUpdateResponseDto AddOrUpdate(CompanyAddOrUpdateRequestDto request);
        ICollection<CompanyDto> Get();
        CompanyDto GetById(int id);
        dynamic Remove(int id);
    }
}
