using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class UserCourse
    {
        public int id { get; set; }
        public string place_id { get; set; }
        public int user_id { get; set; }
        public bool visited { get; set; }
        public int user_rating { get; set; }
        public string review { get; set; }
        public bool is_favorite { get; set; }
    }
}
