﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.Models
{

    public class cartModel
    {
        [Key]
        public int CartyId { get; set; }

        public string cartItems  { get; set; }
        public string itemsPrice { get; set; }
        public string taxPrice { get; set; }
        public string shippingPrice { get; set; }
        public string totalPrice { get; set; }
        public bool IsAccepted { get; set; }
        public string CustomerEmail { get; set; }

        public string CustomerAddress { get; set; }

        public ICollection<OrderProductsModel> OrderProductsModel { get; set; }

       
    }
    
}
