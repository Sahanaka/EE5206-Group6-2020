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
        [RegularExpression("+\\@.+\\..+", ErrorMessage = "Please Enter Valid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please Enter Address")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Please Enter Contact Number")]
        public string ContatctNo { get; set; }

        public string CustomerImage { get; set; }

        [Required(ErrorMessage = "Please Enter passerd")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Both Password fields must match.")]
        [DataType(DataType.Password)]
        public string ReTypePassword { get; set; }

    }
}
