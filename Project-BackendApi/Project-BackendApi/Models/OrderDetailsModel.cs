using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class OrderDetailsModel
    {
        [Key]
        public int ID { get; set; }

        [Required(ErrorMessage = "Please Enter Description")]
        public string Description { get; set; }

       
        public ICollection<ProductModel> ProductModels { get; set; }
        public ICollection<CustomerModel> CustomerModels { get; set; }                                                                                                                   

    }
}
