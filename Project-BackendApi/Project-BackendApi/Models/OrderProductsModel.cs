using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class OrderProductsModel
    {
        [Key]


        public int OrderDetailsId { get; set; }

        public string ProductName { get; set; }
        public string ProductPrice { get; set; }

        public int Quantity { get; set; }
        public string OrderNumber { get; set; }

        public cartModel cartModels { get; set; }
    }
}
