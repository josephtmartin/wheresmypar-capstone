using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheresMyPar.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace WheresMyPar.DataAccess
{
    public class CourseRepository
    {
        const string ConnectionString = "Server=localhost;Database=WheresMyPar;Trusted_Connection=True;";

        //gets all courses
        public List<Course> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT *
                        FROM Courses";

            var results = db.Query<Course>(sql).ToList();
            return results;
        }

        //gets a single user
        public Course Get(int id)
        {
            var sql = @"SELECT *
                        FROM Courses
                        WHERE id = @id";

            using var db = new SqlConnection(ConnectionString);

            var singleCourse = db.QueryFirstOrDefault<Course>(sql, new { id = id });

            return singleCourse;
        }

        //Adds a course
        public void Add(Course course)
        {
            var sql = @"INSERT INTO [dbo].[Courses] ([formatted_address], [lat], [lng], [name], [place_id], [rating], [user_ratings_total])
                        OUTPUT inserted.id
                        VALUES(@formatted_address, @lat, @lng, @name, @place_id, @rating, @user_ratings_total)";

            using var db = new SqlConnection(ConnectionString);

            var id = db.ExecuteScalar<int>(sql, course);

            course.id = id;
        }
    }
}
