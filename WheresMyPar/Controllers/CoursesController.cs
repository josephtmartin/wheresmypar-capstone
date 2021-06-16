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
    [Route("api/Courses")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        CourseRepository _repo;
        public CoursesController()
        {
            _repo = new CourseRepository();
        }

        [HttpGet]
        public IActionResult GetAllCourses()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetCourseById(int id)
        {
            var course = _repo.Get(id);
            if (course == null)
            {
                return NotFound("This course id does not exist");
            }
            return Ok(course);
        }

        [HttpPost]
        public IActionResult AddACourse(Course course)
        {
            _repo.Add(course);
            return Created($"api/Courses/{course.Id}", course);
        }
    }
}
