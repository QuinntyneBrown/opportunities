using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class CompanyService : ICompanyService
    {
        public CompanyService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Companies;
            this.cache = cacheProvider.GetCache();
        }

        public CompanyAddOrUpdateResponseDto AddOrUpdate(CompanyAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Company());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new CompanyAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<CompanyDto> Get()
        {
            ICollection<CompanyDto> response = new HashSet<CompanyDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new CompanyDto(entity)); }    
            return response;
        }


        public CompanyDto GetById(int id)
        {
            return new CompanyDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Company> repository;
        protected readonly ICache cache;
    }
}
