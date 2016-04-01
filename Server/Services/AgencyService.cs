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
    public class AgencyService : IAgencyService
    {
        public AgencyService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Agencies;
            this.cache = cacheProvider.GetCache();
        }

        public AgencyAddOrUpdateResponseDto AddOrUpdate(AgencyAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Agency());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AgencyAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<AgencyDto> Get()
        {
            ICollection<AgencyDto> response = new HashSet<AgencyDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new AgencyDto(entity)); }    
            return response;
        }


        public AgencyDto GetById(int id)
        {
            return new AgencyDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Agency> repository;
        protected readonly ICache cache;
    }
}
