using System;

namespace Chloe.Server.Exceptions
{
    public class AgencyNotFoundException: NotFoundException
    {
        public AgencyNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public AgencyNotFoundException(string message)
            :base(message)
        {

        }

        public AgencyNotFoundException(string message, Exception inner)
        {

        }
    }
}
