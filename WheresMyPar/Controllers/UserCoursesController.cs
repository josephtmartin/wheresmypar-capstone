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

        //GET to /api/UserCourses/{id}
        //GET to /api/UserCourses/1
        [HttpGet("{id}")]
        public IActionResult GetUserCourseById(int id)
        {
            var user = _repo.Get(id);
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
            return Created($"api/UserCourses/{userCourse.id}", userCourse);
        }
    }
}
