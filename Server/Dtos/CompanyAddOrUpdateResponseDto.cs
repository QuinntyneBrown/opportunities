using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class CompanyAddOrUpdateResponseDto: CompanyDto
    {
        public CompanyAddOrUpdateResponseDto(Company entity)
            :base(entity)
        {

        }
    }
}
