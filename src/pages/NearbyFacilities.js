// src/NearbyFacilities.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faHospital, faShoppingCart, faTree } from '@fortawesome/free-solid-svg-icons';
import './NearbyFacilities.css'; // Ensure your CSS file is in the same directory

const NearbyFacilities = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [facilities, setFacilities] = useState([]);

  const mapContainerStyle = {
    height: '400px', // Height of the map
    width: '100%', // Full width
  };

  const center = {
    lat: 12.9716, // Default latitude (e.g., Bangalore)
    lng: 77.5946, // Default longitude (e.g., Bangalore)
  };

  // Facility data with icons
  const facilitiesData = [
    { id: 1, name: 'School A', location: { lat: 12.972, lng: 77.595 }, icon: faSchool },
    { id: 2, name: 'Hospital B', location: { lat: 12.973, lng: 77.596 }, icon: faHospital },
    { id: 3, name: 'Grocery Mart C', location: { lat: 12.974, lng: 77.597 }, icon: faShoppingCart },
    { id: 4, name: 'Park D', location: { lat: 12.975, lng: 77.598 }, icon: faTree },
  ];

  useEffect(() => {
    // Simulate fetching facilities from an API or database
    setFacilities(facilitiesData);
    setMapLoaded(true);
  }, []);

  return (
    <div className="nearby-facilities-container">
      <h1>Nearby Facilities</h1>
      {mapLoaded && (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            {facilities.map(facility => (
              <Marker
                key={facility.id}
                position={facility.location}
                title={facility.name}
              >
                <div className="marker-icon">
                  <FontAwesomeIcon icon={facility.icon} className="facility-icon" />
                </div>
              </Marker>
            ))}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default NearbyFacilities;
