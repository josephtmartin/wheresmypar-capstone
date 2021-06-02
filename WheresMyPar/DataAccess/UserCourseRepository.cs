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

        //gets a single user course table
        public List<UserCourse> GetUserCourses(int user_id)
        {
            var sql = @"SELECT *
                        FROM UserCourse
                        WHERE user_id = @user_id";

            using var db = new SqlConnection(ConnectionString);

            var singleUserCourses = db.Query<UserCourse>(sql, new { user_id = user_id }).ToList();

            return singleUserCourses;
        }

        public void AddFavorite(UserCourse userCourse)
        {
            var sql = @"INSERT INTO [dbo].[UserCourse] ([user_id], [course_id], [is_favorite])
                        OUTPUT inserted.id
                        VALUES(@user_id, @course_id, @is_favorite)";

            using var db = new SqlConnection(ConnectionString);

            var id = db.ExecuteScalar<int>(sql, userCourse);

            userCourse.id = id;
        }
    }
}
