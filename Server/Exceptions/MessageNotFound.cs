using System;

namespace Chloe.Server.Exceptions
{
    public class MessageNotFoundException: NotFoundException
    {
        public MessageNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public MessageNotFoundException(string message)
            :base(message)
        {

        }

        public MessageNotFoundException(string message, Exception inner)
        {

        }
    }
}
