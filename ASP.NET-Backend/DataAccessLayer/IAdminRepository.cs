﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IAdminRepository<T, ID>
    {
        void Edit(T p);
        List<T> GetAll();
        T GetById(ID id);

    }
}
