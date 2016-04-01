using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class AgencyAddOrUpdateResponseDto: AgencyDto
    {
        public AgencyAddOrUpdateResponseDto(Agency entity)
            :base(entity)
        {

        }
    }
}
