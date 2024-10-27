import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import PropertyInfo from './components/PropertyInfo';
import Tabs from './components/Tabs';
import ContactButton from './components/ContactButton';
import Overview from './pages/Overview';
import Highlights from './pages/Highlights';
import NearbyFacilities from './pages/NearbyFacilities';
import ProjectOverview from './pages/ProjectOverview';
import AboutProject from './pages/AboutProject';
import PriceFloorPlan from './pages/PriceFloorPlan';
import Amenities from './pages/Amenities';
import MaterialMetrics from './pages/MaterialMetrics';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <ImageCarousel />
          <div className="info-panel">
            <PropertyInfo />
            <ContactButton />
          </div>
        </div>
        <Tabs />
        <div className="page-content">
          <Routes>

            <Route path="/highlights" element={<Highlights />} />
            <Route path="/nearby-facilities" element={<NearbyFacilities />} />
            <Route path="/project-overview" element={<ProjectOverview />} />
            <Route path="/about-project" element={<AboutProject />} />
            <Route path="/price-floor-plan" element={<PriceFloorPlan />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/material-metrics" element={<MaterialMetrics />} />
            {/* Add a default route for home page if needed */}
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
