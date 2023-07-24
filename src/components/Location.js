import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginBottom:'20px'
};

const center = {
  lat: -7.169612188318052, // Replace with the latitude of your desired location
  lng:  109.58538072329218, // Replace with the longitude of your desired location
};

const GoogleMapsComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC2JsTG-P97VO4-z7LUkdW_scIX2N-4c5Q">
        <div className='map-container'>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} >
        <Marker position={center} />
      </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
