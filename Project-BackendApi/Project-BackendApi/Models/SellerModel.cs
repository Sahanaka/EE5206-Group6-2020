using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project_BackendApi.Models
{
    public class SellerModel 
    {
        [Key]
  

        public int SellerId { get; set; }

        [Required(ErrorMessage = "Please Enter Name")]
        public string Name { get; set; }
        public string Distric { get; set; }

        [Required(ErrorMessage = "Please Enter Address")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Please Enter Contact Number")]
        public string ContatctNo { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; }


        public string ShopImage { get; set; }///

        [NotMapped]
        public IFormFile ImageData { get; set; }

        [NotMapped]
        public String ImageSource { get; set; }


        [Required(ErrorMessage = "Please Enter passerd")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Both Password fields must match.")]
        [DataType(DataType.Password)]
        public string ReTypePassword { get; set; }

        

        [Required(ErrorMessage = "Please Enter at least one Cetogory")]
        public string Cetogory { get; set; }

        public int TotalOrders { get; set; }
        public float TotalReveniue  { get; set; }


        public string UserRole = "Seller";

        
        public ICollection<ProductModel> ProductModels { get; set; }

        public IList<SellerCustomerModel> SellerCustomerModels { get; set; }

    }
}
