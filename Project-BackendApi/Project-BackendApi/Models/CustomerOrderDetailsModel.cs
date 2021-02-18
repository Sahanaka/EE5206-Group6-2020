using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class CustomerOrderDetailsModel
    {
        
        public int OrderDetailsId { get; set; }
        public OrderDetailsModel OrderDetailsModel { get; set; }
      
        public int CustomerId { get; set; }
        public CustomerModel CustomerModel { get; set; }
    }
}
