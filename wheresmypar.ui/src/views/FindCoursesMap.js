import React from 'react';
import WrappedMap from '../components/Map';
import ApiKeys from '../helpers/apiKeys.json';

export default class FindCourses extends React.Component {
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
  }

  render() {
    return (
        <div className='outer-container'>
          <div className='sub-container'>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ApiKeys.google.googleApiKey}`}
              loadingElement={<div style={{ height: '100%' }}/>}
              containerElement={<div style={{ height: '100%' }}/>}
              mapElement={<div style={{ height: '100%' }}/>}>
            </WrappedMap>
          </div>
        </div>
    );
  }
}
