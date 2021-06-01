import React, { Component } from 'react';
// import CourseCard from '../components/Cards/courseCard';
import { Link } from 'react-router-dom';
import courseData from '../helpers/data/courseData';

class SearchResults extends Component {
  state = {
    results: [],
    searchTerm: '',
  };

  componentDidMount() {
    this.populateResults();
  }

  populateResults = () => {
    const searchTerm = this.props.match.params.term;

    courseData.getSearchedCourses(searchTerm.toLowerCase()).then((response) => {
      this.setState({
        results: response,
        searchTerm,
      });
    });
  };

  componentDidUpdate(prevState) {
    if (prevState.searchTerm !== this.props.match.params.term) {
      this.populateResults();
    }
  }

  render() {
    const { results } = this.state;

    // const showResults = () => results.map((result) => <CourseCard key={result.id} product={result} />);

    const courseCard = (course) => (
      <div className='course-card' style={{ width: '500px' }}>
        <div className='card m-2'>
          <h5 className='card-title'>{course.name}</h5>
          <div className='card-body'>
            <p className='card-text'>{course.formatted_address}</p>
            <p>{course.rating}</p>
            <p>{course.user_ratings_total}</p>
          </div>
          <Link className='btn btn-primary m-2' to={`/course-details/${course.id}`}>
            Course Details
          </Link>
        </div>
      </div>
    );

    const cards = results.map(courseCard);

    return (
      <div>
        <h1>Search Results</h1>
        <div className='course-cards-container'>{cards}</div>
      </div>
    );
  }
}

export default SearchResults;
