using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class ReportModel
    {
        [Key]
        public int ID { get; set; }

        [Required(ErrorMessage = "Please Enter Description")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Please Enter Category")]
        public string Category { get; set; }


        public ICollection<CustomerModel> CustomerModels { get; set; }
        public AdminModel AdminModel { get; set; }


    }
}
