using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IAccountManagerService
    {
        AccountManagerAddOrUpdateResponseDto AddOrUpdate(AccountManagerAddOrUpdateRequestDto request);
        ICollection<AccountManagerDto> Get();
        AccountManagerDto GetById(int id);
        dynamic Remove(int id);
    }
}
