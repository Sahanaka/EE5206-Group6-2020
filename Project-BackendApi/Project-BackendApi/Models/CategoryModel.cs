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
        public int ID { get; set; }
        public string Title { get; set; }
       
        public string SubCategory { get; set; }

        public ProductModel ProductModel { get; set; }

    }
}
