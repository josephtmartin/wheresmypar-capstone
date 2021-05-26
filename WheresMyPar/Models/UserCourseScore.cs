using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class UserCourseScore
    {
        public int id { get; set; }
        public string place_id { get; set; }
        public DateTime date_played { get; set; }
        public int score { get; set; }
    }
}
