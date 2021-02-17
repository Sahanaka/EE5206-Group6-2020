using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Project_BackendApi.Models
{
    public class CuStomerReportModel
    {
        public int ReportId { get; set; }
        public ReportModel ReportModel { get; set; }
        public int CustomerId { get; set; }
        public CustomerModel CustomerModel { get; set; }
    }
    
}
