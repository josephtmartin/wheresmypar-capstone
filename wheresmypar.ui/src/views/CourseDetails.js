import React from 'react';
import courseData from '../helpers/data/courseData';
import CourseCard from '../components/Cards/courseCard';

export default class CourseDetails extends React.Component {
  state = {
    course: {},
  }

  componentDidMount() {
    const courseId = this.props.match.params.id;
    this.getASingleCourse(courseId);
  }

  getASingleCourse = (courseId) => {
    courseData.getSingleCourse(courseId).then((response) => {
      this.setState({
        course: response,
      });
    });
  }

  render() {
    const { course } = this.state;
    return (
      <>
        <h2>Course Details Page</h2>
        <CourseCard key={course.id} course={course} />
      </>
    );
  }
}
