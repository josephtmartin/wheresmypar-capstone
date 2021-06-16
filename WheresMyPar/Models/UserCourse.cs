using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class UserCourse
    {
        public int Id { get; set; }
        public int Course_id { get; set; }
        public int User_id { get; set; }
        public bool Visited { get; set; }
        public int User_rating { get; set; }
        public string Review { get; set; }
        public bool Is_favorite { get; set; }
    }
}
