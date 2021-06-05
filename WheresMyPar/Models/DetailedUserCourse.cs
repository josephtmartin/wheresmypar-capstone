using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class DetailedUserCourse
    {
        public int id { get; set; }
        public int course_id { get; set; }
        public int user_id { get; set; }
        public bool visited { get; set; }
        public int user_rating { get; set; }
        public string review { get; set; }
        public bool is_favorite { get; set; }

        public string formatted_address { get; set; }
        public double lat { get; set; }
        public double lng { get; set; }
        public string name { get; set; }
        public string place_id { get; set; }
        public double rating { get; set; }
        public int user_ratings_total { get; set; }
    }
}
