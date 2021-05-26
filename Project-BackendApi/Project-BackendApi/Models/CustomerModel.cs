    using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project_BackendApi.Models
{
    public class CustomerModel 
    {
        [Key]
        public int CustomerId { get; set; }

        [Required(ErrorMessage = "Please Enter Name")]
        public string Name { get; set; }

        [Required]
        [EmailAddress(ErrorMessage ="Invalid Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please Enter Address")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Please Enter Contact Number")]
        public string Contatct_No { get; set; }

        public string CustomerImage { get; set; } 

        [NotMapped]
        public IFormFile ImageData { get; set; } 

        [NotMapped]
        public String ImageSource { get; set; } 

        [Required(ErrorMessage = "Please Enter password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Both Password fields must match.")]
        [DataType(DataType.Password)]
        public string ReTypePassword { get; set; }

        public string UserRole { get; set; }
        internal int customerModelId;

        public IList<SellerCustomerModel> SellerCustomerModels { get; set; }
        public IList<ProductCustomerModel> ProductCustomerModels { get; set; }
        public IList<CustomerOrderDetailsModel> CustomerOrderDetailsModels { get; set; }
        public IList<CuStomerReportModel> CuStomerReportModels { get; set; }

    }
}
