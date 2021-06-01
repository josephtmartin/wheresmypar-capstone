import axios from 'axios';
import { baseUrl } from '../config.json';

const coursesUrl = `${baseUrl}/courses`;

const getAllCourses = () => new Promise((resolve, reject) => {
  axios.get(`${coursesUrl}`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getSingleCourse = (courseId) => new Promise((resolve, reject) => {
  axios.get(`${coursesUrl}/${courseId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getSearchedCourses = (searchTerm) => new Promise((resolve, reject) => axios
  .get(`${coursesUrl}`).then((response) => {
    const searched = response.data.filter((course) => course.formatted_address.toLowerCase().includes(searchTerm));
    resolve(searched);
  }).catch((error) => reject(error)));

export default { getAllCourses, getSingleCourse, getSearchedCourses };
