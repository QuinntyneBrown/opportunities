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
    public class MessageService : IMessageService
    {
        public MessageService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Messages;
            this.cache = cacheProvider.GetCache();
        }

        public MessageAddOrUpdateResponseDto AddOrUpdate(MessageAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Message());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new MessageAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<MessageDto> Get()
        {
            ICollection<MessageDto> response = new HashSet<MessageDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new MessageDto(entity)); }    
            return response;
        }


        public MessageDto GetById(int id)
        {
            return new MessageDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Message> repository;
        protected readonly ICache cache;
    }
}
