import axios from 'axios';
import { baseUrl } from '../config.json';

const userCourseScoresUrl = `${baseUrl}/userCourseScores`;

const addScores = (userId, courseId, score) => new Promise((resolve, reject) => {
  axios
    .post(`${userCourseScoresUrl}`, {
      user_id: userId,
      course_id: courseId,
      score,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

const getAllScoresForAUser = (userId) => new Promise((resolve, reject) => {
  axios.get(`${userCourseScoresUrl}/allscores/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default { addScores, getAllScoresForAUser };
