import React from 'react';
import courseData from '../helpers/data/courseData';
import CourseCard from '../components/Cards/courseCard';
import SearchInput from '../components/SearchInput';

export default class FindCourses extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    // using the browser's geolocation, get the user's location and set those lat/long values to the state
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = position.coords;
      const lat = coordinates.latitude;
      const long = coordinates.longitude;
      this.setState({
        latitude: lat,
        longitude: long,
      });
    });
    this.getCourses();
  }

  getCourses = () => {
    // console.warn('getCourses Function', lat, lng);
    courseData.getAllCourses().then((response) => {
      this.setState({
        courses: response,
      });
    });
  }

  render() {
    const { courses } = this.state;

    const renderAllCourseCards = () => courses.map((course) => (<CourseCard key={course.id} course={course} />));
    return (
        <div className='outer-container'>
          <div className='sub-container'>
            <h2>Find Courses In Your City</h2>
            <p className='mr-2 mt-3 text-light'>Search:</p>
                <SearchInput />
            {renderAllCourseCards()}
          </div>
        </div>
    );
  }
}
