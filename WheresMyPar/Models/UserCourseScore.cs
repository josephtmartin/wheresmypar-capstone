using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class UserCourseScore
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public int course_id { get; set; }
        public DateTime date_played { get; set; }
        public int score { get; set; }
    }
}
