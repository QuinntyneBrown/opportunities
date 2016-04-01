using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class RecruiterAddOrUpdateResponseDto: RecruiterDto
    {
        public RecruiterAddOrUpdateResponseDto(Recruiter entity)
            :base(entity)
        {

        }
    }
}
