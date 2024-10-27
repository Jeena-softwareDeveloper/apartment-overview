import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faStar, faMapMarkerAlt, faBuilding, faInfo, faDollarSign, faList, faChartBar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab index

  const tabs = [
    { name: "Overview", path: "/overview", icon: faInfoCircle },
    { name: "Highlights", path: "/highlights", icon: faStar },
    { name: "Nearby Facilities", path: "/nearby-facilities", icon: faMapMarkerAlt },
    { name: "Project Overview", path: "/project-overview", icon: faBuilding },
    { name: "About Project", path: "/about-project", icon: faInfo },
    { name: "Price & Floor Plan", path: "/price-floor-plan", icon: faDollarSign },
    { name: "Amenities", path: "/amenities", icon: faList },
    { name: "Material Metrics", path: "/material-metrics", icon: faChartBar }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index); // Update active tab index
  };

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <Link 
          key={index} 
          to={tab.path} 
          className={`tab ${activeTab === index ? 'active-tab' : ''}`} // Apply active class
          onClick={() => handleTabClick(index)} // Handle tab click
        >
          <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
          <span>{tab.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
