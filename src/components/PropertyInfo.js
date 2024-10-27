import React from 'react';
import '../styles/PropertyInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCheckCircle, faMoneyBillWave, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const PropertyInfo = () => {
  return (
    <div className="property-info">
      <div className="info-item">
        <FontAwesomeIcon icon={faHome} size="1x" color="#313265" />
        <h3>4 BHK Apartment</h3>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#313265" />
        <h3>Ready to Move</h3>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faMoneyBillWave} size="1x" color="#313265" />
        <h3>₹4.7K/sq.ft</h3>
      </div>
      <div className="info-item">
        <FontAwesomeIcon icon={faArrowsAlt} size="1x" color="#313265" />
        <h3>Sizes: 2565 - 3177 sq.ft</h3>
      </div>
    </div>
  );
};

export default PropertyInfo;
