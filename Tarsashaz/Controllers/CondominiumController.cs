﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tarsashaz.DAL.IRepositories;
using Tarsashaz.Models.Addresses;
using Tarsashaz.Models.Condominiums;

namespace Tarsashaz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CondominiumController : ControllerBase
    {
        private readonly ICondominiumRepository repository;

        public CondominiumController(ICondominiumRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet("{id}")]
        public Condominium Find(int id)
        {
            return repository.Find(id);
        }

        [HttpPost]
        public Condominium Insert([FromBody] Condominium c)
        {
            return repository.Insert(c);
        }

        [HttpPut("{id}")]
        public Condominium Update(int id, [FromBody] Condominium c)
        {
            return repository.Update(c, id);
        }

        [HttpDelete("{id}")]
        public Condominium Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}
