using System;

namespace Chloe.Server.Exceptions
{
    public class JobNotFoundException: NotFoundException
    {
        public JobNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public JobNotFoundException(string message)
            :base(message)
        {

        }

        public JobNotFoundException(string message, Exception inner)
        {

        }
    }
}
