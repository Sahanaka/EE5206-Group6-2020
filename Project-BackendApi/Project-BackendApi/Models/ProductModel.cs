using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class ProductModel
    {

        [Key]
        public int ID { get; set; }
        public string Title { get; set; }
        public float Price { get; set; }
        public string Name { get; set; }
        public int Availabe_amount{ get; set; }
        public string Image { get; set; }
        public string Discount { get; set; }
        public string Size { get; set; }
        public int Quntity { get; set; }

    }
}
