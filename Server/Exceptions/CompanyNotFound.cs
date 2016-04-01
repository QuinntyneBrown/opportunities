using System;

namespace Chloe.Server.Exceptions
{
    public class CompanyNotFoundException: NotFoundException
    {
        public CompanyNotFoundException()
            :base("You Tube Video Not Found")
        {
        }

        public CompanyNotFoundException(string message)
            :base(message)
        {

        }

        public CompanyNotFoundException(string message, Exception inner)
        {

        }
    }
}
