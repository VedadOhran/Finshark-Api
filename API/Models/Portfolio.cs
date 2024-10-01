using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("Portfolios")]
    public class Portfolio
    {
        public AppUser AppUser { get; set; }
        public string AppUserId { get; set; }
        public Stock Stock { get; set; }
        public int StockId { get; set; }
    }
}