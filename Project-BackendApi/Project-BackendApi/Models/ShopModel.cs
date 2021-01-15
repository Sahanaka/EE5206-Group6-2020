using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class ShopModel
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string District { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }

        public string ContactNo { get; set; }
        public string Image { get; set; }
        public string Category { get; set; }

        public ProductModel ProductModel { get; set; }
        public ICollection<CustomerModel> CustomerModels { get; set; }


    }
}
