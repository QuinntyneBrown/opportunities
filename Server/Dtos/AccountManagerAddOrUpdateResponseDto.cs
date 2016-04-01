using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AccountManagerAddOrUpdateResponseDto: AccountManagerDto
    {
        public AccountManagerAddOrUpdateResponseDto(AccountManager entity)
            :base(entity)
        {

        }
    }
}
