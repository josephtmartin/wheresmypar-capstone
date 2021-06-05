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
    [Route("api/UserCourseScores")]
    [ApiController]
    public class UserCourseScoresController : ControllerBase
    {
        UserCourseScoreRepository _repo;
        public UserCourseScoresController()
        {
            _repo = new UserCourseScoreRepository();
        }

        [HttpGet]
        public IActionResult GetAllUsersCourseScores()
        {
            return Ok(_repo.GetAll());
        }

        //GET to /api/UserCourseScores/{id}
        //GET to /api/UserCourseScores/1
        [HttpGet("{id}")]
        public IActionResult GetUserCourseScoresById(int id)
        {
            var user = _repo.Get(id);
            if (user == null)
            {
                return NotFound("This user does not have any course scores");
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddAScore(UserCourseScore userCourseScore)
        {
            _repo.AddScore(userCourseScore);
            return Created($"api/UserCourses/{userCourseScore.id}", userCourseScore);
        }
    }
}
