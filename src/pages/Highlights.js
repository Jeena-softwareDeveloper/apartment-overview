import React from 'react';
import './Highlights.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faRoad, faCar, faSolarPanel, faSchool, faWarehouse, faStar } from '@fortawesome/free-solid-svg-icons'; // Import a new icon for the header

const highlightsData = [
  { icon: faFan, text: 'Attractive Air Conditioned Entrance Foyer' },
  { icon: faRoad, text: '5 Cross Road Connectivity Near 80 mtrs' },
  { icon: faWarehouse, text: 'Huge Outer Balcony of 18.6 x 6 ft' },
  { icon: faSchool, text: 'Nearby all major amenities like schools, hospitals, grocery marts, etc.' },
  { icon: faCar, text: '2 Allotted Car Parking Spaces for Each Apartment' },
  { icon: faSolarPanel, text: 'Solar Panel for Common Amenities' },
];

const Highlights = () => {
  return (
    <div className="highlights-container">
      <h1 className="highlights-header">
        <FontAwesomeIcon icon={faStar} className="header-icon" /> {/* Highlight Icon */}
        Highlights
      </h1>
      <h2 className="highlights-subheader">Why Sacred Shivansh?</h2>
      
      {highlightsData.map((highlight, index) => (
        <div 
          className="highlight-item" 
          style={{ animationDelay: `${index * 0.1}s` }} // Set delay based on index
          key={index}
        >
          <FontAwesomeIcon icon={highlight.icon} className="highlight-icon" />
          <p>{highlight.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
