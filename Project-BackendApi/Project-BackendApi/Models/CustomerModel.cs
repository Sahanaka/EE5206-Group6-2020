    using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Project_BackendApi.Models
{
    public class CustomerModel 
    {
        [Key]
        public int ID { get; set; }

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

        [Required(ErrorMessage = "Please Enter password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Both Password fields must match.")]
        [DataType(DataType.Password)]
        public string ReTypePassword { get; set; }

        public string UserRole = "Customer";



        public ICollection<ShopModel> ShopModel { get; set; }
        public ICollection<ProductModel> ProductModels { get; set; }
        public ICollection<OrderDetailsModel> OrderDetailsModels { get; set; }
        public ICollection<ReportModel> ReportModels { get; set; }

    }
}
