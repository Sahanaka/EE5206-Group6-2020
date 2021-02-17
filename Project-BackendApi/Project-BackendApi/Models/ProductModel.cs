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
       

        public int ProductId { get; set; }

        [Required(ErrorMessage = "Please Enter Title")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Please Enter Price")]
        public float Price { get; set; }

        [Required(ErrorMessage = "Please Enter AvailableAmount")]
        public int AvailabeAmount{ get; set; }


        public string Image { get; set; }
        public string Discount { get; set; }

        
        public string Size { get; set; }

        [Required(ErrorMessage = "Please Enter Quantity")]
        public int Quantity { get; set; }


        public int ShopProductId { get; set; }

        public int CategoryProductId { get; set; }


        public SellerModel SellerModel { get; set; }
        public CategoryModel CategoryModel { get; set; }
        public IList<ProductCustomerModel> ProductCustomerModels { get; set; }

        public ICollection<OrderDetailsModel> OrderDetailsModels { get; set; }




    }
}
