using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheresMyPar.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace WheresMyPar.DataAccess
{
    public class UserCourseScoreRepository
    {
        const string ConnectionString = "Server=localhost;Database=WheresMyPar;Trusted_Connection=True;";

        //gets all users course with scores
        public List<UserCourseScore> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT *
                        FROM UserCourseScore";

            var results = db.Query<UserCourseScore>(sql).ToList();
            return results;
        }

        //gets a single user course with scores
        public UserCourseScore Get(int id)
        {
            var sql = @"SELECT *
                        FROM UserCourseScore
                        WHERE id = @id";

            using var db = new SqlConnection(ConnectionString);

            var singleUserCourseScore = db.QueryFirstOrDefault<UserCourseScore>(sql, new { id = id });

            return singleUserCourseScore;
        }




    }
}
