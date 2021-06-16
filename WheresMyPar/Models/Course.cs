using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Formatted_address { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
        public string Name { get; set; }
        public string Place_id { get; set; }
        public double Rating { get; set; }
        public int User_ratings_total { get; set; }
    }
}
