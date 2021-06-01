import Geocode from 'react-geocode';
import { google } from '../apiKeys.json';

const GoogleMapSearch = (area) => new Promise((resolve, reject) => {
  Geocode.setApiKey(google.googleApiKey);
  console.warn(google.googleApiKey);
  Geocode.setLanguage('en');
  Geocode.setRegion('es');
  Geocode.enableDebug();
  Geocode.fromAddress(`${area}`).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      const latLongObj = {
        lat,
        lng,
      };
      resolve(latLongObj);
    },
    (error) => {
      reject(error);
    },
  );
});

export default GoogleMapSearch;