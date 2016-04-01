using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class JobAddOrUpdateResponseDto: JobDto
    {
        public JobAddOrUpdateResponseDto(Job entity)
            :base(entity)
        {

        }
    }
}
