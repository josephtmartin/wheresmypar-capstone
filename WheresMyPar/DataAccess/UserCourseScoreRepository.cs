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

        public void AddScore(UserCourseScore userCourseScore)
        {
            var sql = @"INSERT INTO [dbo].[UserCourseScore] ([user_id], [course_id], [date_played], [score])
                        OUTPUT inserted.id
                        VALUES(@user_id, @course_id, CURRENT_TIMESTAMP, @score)";

            using var db = new SqlConnection(ConnectionString);

            var id = db.ExecuteScalar<int>(sql, userCourseScore);

            userCourseScore.id = id;
        }

        public List<UserCourseScore> GetAllUsersScores(int user_id)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT ucs.*, formatted_address, lat, lng, name, place_id, rating, user_ratings_total
                        FROM UserCourseScore ucs
	                        Join courses c
	                        on c.id = ucs.course_id
                        WHERE ucs.user_id = @user_id";

            var results = db.Query<UserCourseScore>(sql, new { user_id = user_id }).ToList();
            return results;
        }
    }
}
