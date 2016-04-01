using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<User> Users { get; }
        IRepository<Role> Roles { get; }
        IRepository<Job> Jobs { get; }
        IRepository<Recruiter> Recruiters { get; }
        IRepository<Agency> Agencies { get; }
        IRepository<AccountManager> AccountManagers { get; }
        IRepository<Message> Messages { get; }

        void SaveChanges();
    }
}
