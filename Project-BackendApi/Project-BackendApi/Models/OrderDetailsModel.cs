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
        

        public int OrderDetailsId { get; set; }

        [Required(ErrorMessage = "Please Enter Description")]
        public string Description { get; set; }

        public int ProductOrderId { get; set; }

        public ProductModel ProductModel { get; set; }
        public IList<CustomerOrderDetailsModel> CustomerOrderDetailsModels { get; set; }

    }
}
