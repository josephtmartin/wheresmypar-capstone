using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheresMyPar.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace WheresMyPar.DataAccess
{
    public class UserCourseRepository
    {
        const string ConnectionString = "Server=localhost;Database=WheresMyPar;Trusted_Connection=True;";

        //gets all users courses
        public List<UserCourse> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT *
                        FROM UserCourse";

            var results = db.Query<UserCourse>(sql).ToList();
            return results;
        }

        //gets a single user course
        public UserCourse Get(int id)
        {
            var sql = @"SELECT *
                        FROM UserCourse
                        WHERE id = @id";

            using var db = new SqlConnection(ConnectionString);

            var singleUserCourse = db.QueryFirstOrDefault<UserCourse>(sql, new { id = id });

            return singleUserCourse;
        }

        


    }
}
