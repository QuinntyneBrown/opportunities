using System;

namespace Chloe.Server.Exceptions
{
    public class AccountManagerNotFoundException: NotFoundException
    {
        public AccountManagerNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public AccountManagerNotFoundException(string message)
            :base(message)
        {

        }

        public AccountManagerNotFoundException(string message, Exception inner)
        {

        }
    }
}
