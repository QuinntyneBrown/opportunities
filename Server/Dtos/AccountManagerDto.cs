using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AccountManagerDto
    {
        public AccountManagerDto(AccountManager entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public AccountManagerDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
