// src/ProjectOverview.js
import React from 'react';
import './ProjectOverview.css'; // Ensure this file exists
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faCogs, faCalendarAlt, faBuilding, faClipboardList, faIdBadge, faArrowsAltH, faMoneyBillWave, faCompass } from '@fortawesome/free-solid-svg-icons';

const ProjectOverview = () => {
  return (
    <div className="project-overview-container">
      <h1 className="project-overview-header">Project Overview</h1>
      <div className="project-overview-grid">
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faLandmark} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Total Project Area:</span>
            <span className="project-detail-value">1.24 Acres</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faCogs} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Configuration:</span>
            <span className="project-detail-value">4 BHK Apartment</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faCalendarAlt} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Possession Starts:</span>
            <span className="project-detail-value">May, 2025</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faBuilding} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Launch Date:</span>
            <span className="project-detail-value">Mar, 2023</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faClipboardList} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Project Size:</span>
            <span className="project-detail-value">2 Buildings - 104 units</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faIdBadge} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">RERA ID:</span>
            <span className="project-detail-value">PR/GJ/AHMEDABAD/SAN...</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faArrowsAltH} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Sizes (sqft):</span>
            <span className="project-detail-value">3564 - 4131 sq.ft.</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faMoneyBillWave} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Avg. Price:</span>
            <span className="project-detail-value">4.86 K/sq.ft</span>
          </div>
        </div>
        <div className="project-overview-box">
          <FontAwesomeIcon icon={faCompass} className="project-detail-icon" />
          <div className="project-detail-item">
            <span className="project-detail-label">Direction Facing:</span>
            <span className="project-detail-value">East-West</span>
          </div>
        </div>
      </div>
      <button className="contact-button">Contact Seller</button>
      <button className="schedule-visit-button">Schedule Visit</button>
    </div>
  );
};

export default ProjectOverview;
