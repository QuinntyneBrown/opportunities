using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class AccountManagerService : IAccountManagerService
    {
        public AccountManagerService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.AccountManagers;
            this.cache = cacheProvider.GetCache();
        }

        public AccountManagerAddOrUpdateResponseDto AddOrUpdate(AccountManagerAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new AccountManager());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AccountManagerAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<AccountManagerDto> Get()
        {
            ICollection<AccountManagerDto> response = new HashSet<AccountManagerDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new AccountManagerDto(entity)); }    
            return response;
        }


        public AccountManagerDto GetById(int id)
        {
            return new AccountManagerDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<AccountManager> repository;
        protected readonly ICache cache;
    }
}
