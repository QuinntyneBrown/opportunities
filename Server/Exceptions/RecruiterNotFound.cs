using System;

namespace Chloe.Server.Exceptions
{
    public class RecruiterNotFoundException: NotFoundException
    {
        public RecruiterNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public RecruiterNotFoundException(string message)
            :base(message)
        {

        }

        public RecruiterNotFoundException(string message, Exception inner)
        {

        }
    }
}
