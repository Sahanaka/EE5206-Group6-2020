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

        [Required(ErrorMessage = "Please Enter Name")]
        public string Name { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please Enter Address")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Please Enter Contact Number")]
        public string ContactNo { get; set; }

        [Required(ErrorMessage = "Please Enter District")]
        public string District { get; set; }


        [Required(ErrorMessage = "Please Enter Category")]
        public string Category { get; set; }

        public string Image { get; set; }


        [Required(ErrorMessage = "Please Enter password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Both Password fields must match.")]
        [DataType(DataType.Password)]
        public string ReTypePassword { get; set; }


        public ProductModel ProductModel { get; set; }
        public ICollection<CustomerModel> CustomerModels { get; set; }


    }
}
