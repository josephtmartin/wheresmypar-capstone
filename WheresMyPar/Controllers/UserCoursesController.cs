using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WheresMyPar.DataAccess;
using WheresMyPar.Models;

namespace WheresMyPar.Controllers
{
    [Route("api/UserCourses")]
    [ApiController]
    public class UserCoursesController : ControllerBase
    {
        UserCourseRepository _repo;
        public UserCoursesController()
        {
            _repo = new UserCourseRepository();
        }

        [HttpGet]
        public IActionResult GetAllUserCourses()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var userCourse = _repo.Get(id);
            if (userCourse == null)
            {
                return NotFound("This user course id does not exist");
            }
            return Ok(userCourse);
        }

        [HttpGet("reviews/{course_id}")]
        public IActionResult GetAllReviewsByCourseId(int course_id)
        {
            var userCourse = _repo.GetReviewsByCourseId(course_id);
            if (userCourse == null)
            {
                return NotFound("This user course id does not exist");
            }
            return Ok(userCourse);
        }

        //GET to /api/UserCourses/{id}
        //GET to /api/UserCourses/1
        [HttpGet("user/{id}")]
        public IActionResult GetUserCourseByUserId(int id)
        {
            var user = _repo.GetUserCourses(id);
            if (user == null)
            {
                return NotFound("This user does not have any courses");
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddAFavorite(UserCourse userCourse)
        {
            _repo.AddFavorite(userCourse);
            return Created($"api/UserCourses/{userCourse.Id}", userCourse);
        }

        [HttpDelete("delete/{user_id}/{course_id}")]
        public IActionResult DeleteFavoriteCourse(int user_id, int course_id)
        {
            var userCourse = _repo.GetByCourseId(user_id, course_id);

            _repo.DeleteFavorite(userCourse);
            return Ok();
        }

        [HttpPatch("addreview/{user_id}/{course_id}")]
        public IActionResult AddAReview(int user_id, int course_id, UserCourse userCourseObj)
        {
            var userCourse = _repo.GetByCourseId(user_id, course_id);

            userCourse.User_rating = userCourseObj.User_rating;
            userCourse.Review = userCourseObj.Review;

            _repo.AddReview(userCourse);
            return Ok(userCourse);
        }
    }
}
