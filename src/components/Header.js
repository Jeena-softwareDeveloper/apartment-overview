import React from 'react';
import '../styles/Header.css';


const Header = () => {
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <h1>Sacred Shivansh</h1>
            <h2>By Sacred Nine Realty,</h2>
            <p>Shela, Ahmedabad.</p>
          </div>
          <div className="header-right">
            <p className="price-range">₹55.11L - ₹76.98L</p>
            <p className="price-per-sqft">₹4.37 K/sq.ft</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;