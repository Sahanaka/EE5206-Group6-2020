using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class SellerCustomerModel
    {
        public int CustomerId { get; set; }
        public CustomerModel CustomerModel { get; set; }
        public int SellerId { get; set; }

        public SellerModel SellerModel { get; set; }
    }
}
