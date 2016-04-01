using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System;

namespace Chloe.Server.Data
{
    public class ChloeUow : IChloeUow
    {
        protected IDbContext dbContext;

        protected IRepositoryProvider RepositoryProvider { get; set; }

        public ChloeUow(IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            var repositoryProvider = new RepositoryProvider(new RepositoryFactories());
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }

        public ChloeUow(IRepositoryProvider repositoryProvider, IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }
        
        public IRepository<User> Users { get { return GetStandardRepo<User>(); } }
        public IRepository<Role> Roles { get { return GetStandardRepo<Role>(); } }
        public IRepository<Job> Jobs { get { return GetStandardRepo<Job>(); } }
        public IRepository<Recruiter> Recruiters { get { return GetStandardRepo<Recruiter>(); } }
        public IRepository<Agency> Agencies { get { return GetStandardRepo<Agency>(); } }
        public IRepository<AccountManager> AccountManagers { get { return GetStandardRepo<AccountManager>(); } }
        public IRepository<Message> Messages { get { return GetStandardRepo<Message>(); } }
        public IRepository<Technology> Technologies { get { return GetStandardRepo<Technology>(); } }

        protected void ConfigureDbContext(IDbContext dbContext)
        {
            dbContext.Configuration.ProxyCreationEnabled = false;
            dbContext.Configuration.LazyLoadingEnabled = false;
            dbContext.Configuration.ValidateOnSaveEnabled = false;
        }
        
        public void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }

        protected IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        protected T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.dbContext != null)
                {
                    this.dbContext.Dispose();
                }
            }
        }

        #endregion
        
        public void Add<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public void Update<T>(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
