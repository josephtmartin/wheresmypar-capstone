import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
// import { Link } from 'react-router-dom';
import courseData from '../../helpers/data/courseData';
import MapCourseCard from '../Cards/mapCourseCard';
import basket from '../../images/disc-golf-basket.png';

class Map extends React.Component {
  state = {
    courses: [],
    selectedCourse: null,
  };

  componentDidMount() {
    this.loadTheCourses();
  }

  loadTheCourses = () => {
    courseData.getAllCourses().then((response) => {
      this.setState({
        courses: response,
      });
    });
  };

  render() {
    const { courses, selectedCourse } = this.state;
    const iconMarker = new window.google.maps.MarkerImage(
      `${basket}`,
      null, /* size is determined at runtime */
      null, /* origin is 0,0 */
      null, /* anchor is bottom center of the scaled image */
      new window.google.maps.Size(32, 32)
    );
    return (

      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 35.64070770000001, lng: -86.5164992 }}
      >
        {courses.map((course) => (
          <Marker
            icon={iconMarker}
            key={course.id}
            position={{ lat: course.lat, lng: course.lng }}
            onClick={() => {
              this.setState({
                selectedCourse: course,
              });
            }}
          />
        ))}
        {selectedCourse && (
          <InfoWindow position={{ lat: selectedCourse.lat, lng: selectedCourse.lng }} onCloseClick={() => {
            this.setState({
              selectedCourse: null,
            });
          }}>
            <MapCourseCard course={selectedCourse}/>
          </InfoWindow>
        )}
      </GoogleMap>

    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
