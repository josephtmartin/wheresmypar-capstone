using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class UserCourseScore
    {
        public int Id { get; set; }
        public int User_id { get; set; }
        public int Course_id { get; set; }
        public DateTime Date_played { get; set; }
        public int Score { get; set; }

        public string Formatted_address { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
        public string Name { get; set; }
        public string Place_id { get; set; }
        public double Rating { get; set; }
        public int User_ratings_total { get; set; }
    }
}
