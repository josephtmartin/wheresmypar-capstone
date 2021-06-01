﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WheresMyPar.Models
{
    public class Course
    {
        public int id { get; set; }
        public string formatted_address { get; set; }
        public double lat { get; set; }
        public double lng { get; set; }
        public string name { get; set; }
        public string place_id { get; set; }
        public double rating { get; set; }
        public int user_ratings_total { get; set; }
    }
}
