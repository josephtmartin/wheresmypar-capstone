using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheresMyPar.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace WheresMyPar.DataAccess
{
    public class UsersRepository
    {
        const string ConnectionString = "Server=localhost;Database=WheresMyPar;Trusted_Connection=True;";

        //gets all users
        public List<User> GetAll()
        {
            using var db = new SqlConnection(ConnectionString);

            var sql = @"SELECT *
                        FROM Users";

            var results = db.Query<User>(sql).ToList();
            return results;
        }

        //gets a single user
        public User Get(int id)
        {
            var sql = @"SELECT *
                        FROM Users
                        WHERE id = @id";

            using var db = new SqlConnection(ConnectionString);

            var singleUser = db.QueryFirstOrDefault<User>(sql, new { id = id });

            return singleUser;
        }

        // get user by fb_uid
        public User GetByFBUid(string fb_uid)
        {
            var sql = @"SELECT *
                        FROM Users
                        WHERE fb_uid = @fb_uid";

            using var db = new SqlConnection(ConnectionString);

            var singleUser = db.QueryFirstOrDefault<User>(sql, new { fb_uid = fb_uid });

            return singleUser;
        }

        //Adds a user
        public void Add(User user)
        {
            var sql = @"INSERT INTO [dbo].[Users] ([fb_uid])
                        OUTPUT inserted.id
                        VALUES(@fb_uid)";

            using var db = new SqlConnection(ConnectionString);

            var id = db.ExecuteScalar<int>(sql, user);

            user.id = id;
        }



    }
}
