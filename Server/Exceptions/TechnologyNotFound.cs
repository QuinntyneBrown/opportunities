using System;

namespace Chloe.Server.Exceptions
{
    public class TechnologyNotFoundException: NotFoundException
    {
        public TechnologyNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public TechnologyNotFoundException(string message)
            :base(message)
        {

        }

        public TechnologyNotFoundException(string message, Exception inner)
        {

        }
    }
}
