﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class ProductCustomerModel
    {
        public int CustomerId { get; set; }
        public CustomerModel CustomerModel { get; set; }

        public int ProductId { get; set; }
        public ProductModel ProductModel { get; set; }
    }
}
