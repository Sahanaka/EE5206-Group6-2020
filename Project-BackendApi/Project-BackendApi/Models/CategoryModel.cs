using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class CategoryModel
    {
        [Key]
        public int CategoryId { get; set; }

        [Required(ErrorMessage = "Please Enter Title")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Please Enter SubCategory")]
        public string SubCategory { get; set; }

        
        
        public ICollection<ProductModel> ProductModels { get; set; }

    }
}
