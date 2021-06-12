import axios from 'axios';
import { baseUrl } from '../config.json';

const userCoursesUrl = `${baseUrl}/userCourses`;

const createUserCoursesFavorites = (userId, courseId) => new Promise((resolve, reject) => {
  axios
    .post(`${userCoursesUrl}`, {
      user_id: userId,
      course_id: courseId,
      visited: true,
      is_favorite: true,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

const getUserCoursesFavorites = (userId) => new Promise((resolve, reject) => {
  axios.get(`${userCoursesUrl}/user/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const deleteFromFavorites = (courseId) => new Promise((resolve, reject) => {
  axios.patch(`${userCoursesUrl}/update/${courseId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const AddAReview = (userId, courseId, userRating, review) => new Promise((resolve, reject) => {
  axios.patch(`${userCoursesUrl}/addReview/${userId}/${courseId}`, {
    user_rating: userRating,
    review,
  }).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default {
  createUserCoursesFavorites,
  getUserCoursesFavorites,
  deleteFromFavorites,
  AddAReview,
};
