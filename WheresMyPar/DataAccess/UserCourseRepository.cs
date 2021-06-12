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
        public List<DetailedUserCourse> GetUserCourses(int user_id)
        {
            var sql = @"SELECT uc.*, c.formatted_address, c.lat, c.lng, c.[name], c.place_id, c. rating, c.user_ratings_total
                        FROM UserCourse uc
                         join Courses c
	                        on uc.course_id = c.id
                        WHERE user_id = @user_id
                        AND is_favorite = 1
                        ORDER BY id desc";

            using var db = new SqlConnection(ConnectionString);

            var singleUserCourses = db.Query<DetailedUserCourse>(sql, new { user_id = user_id }).ToList();

            return singleUserCourses;
        }

        public List<DetailedUserCourse> GetReviewsByCourseId(int course_id)
        {
            var sql = @"SELECT uc.*, c.formatted_address, c.lat, c.lng, c.[name], c.place_id, c. rating, c.user_ratings_total
                        FROM UserCourse uc
                         join Courses c
	                        on uc.course_id = c.id
							WHERE course_id = @course_id
                        AND user_rating IS NOT NULL
                        AND review IS NOT NULL
                        ORDER BY id desc";

            using var db = new SqlConnection(ConnectionString);

            var courseReviews = db.Query<DetailedUserCourse>(sql, new { course_id = course_id }).ToList();

            return courseReviews;
        }

        public UserCourse Get(int id)
        {
            var sql = @"SELECT *
                        FROM [UserCourse]
                        WHERE id = @id";

            using var db = new SqlConnection(ConnectionString);

            var singleUserCourse = db.QueryFirstOrDefault<UserCourse>(sql, new { id = id });

            return singleUserCourse;
        }

        public UserCourse GetByCourseId(int user_id, int course_id)
        {
            var sql = @"SELECT *
                        FROM [UserCourse]
                        WHERE course_id = @course_id
                        AND user_id = @user_id";

            using var db = new SqlConnection(ConnectionString);

            var singleUserCourse = db.QueryFirstOrDefault<UserCourse>(sql, new { user_id = user_id, course_id = course_id });

            return singleUserCourse;
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

        public void DeleteFavorite(UserCourse userCourse)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"UPDATE [UserCourse]
                        SET is_favorite = 0
                        WHERE id = @id";

            db.Execute(sql, userCourse);
        }

        public void AddReview(UserCourse userCourse)
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"UPDATE [UserCourse]
                        SET user_rating = @user_rating,
	                        review = @review
                        WHERE [user_id] = @user_id
                        AND course_id = @course_id";

            db.Execute(sql, userCourse);
        }
    }
}
