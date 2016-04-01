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
    public class RecruiterService : IRecruiterService
    {
        public RecruiterService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Recruiters;
            this.cache = cacheProvider.GetCache();
        }

        public RecruiterAddOrUpdateResponseDto AddOrUpdate(RecruiterAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Recruiter());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new RecruiterAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<RecruiterDto> Get()
        {
            ICollection<RecruiterDto> response = new HashSet<RecruiterDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new RecruiterDto(entity)); }    
            return response;
        }


        public RecruiterDto GetById(int id)
        {
            return new RecruiterDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Recruiter> repository;
        protected readonly ICache cache;
    }
}
