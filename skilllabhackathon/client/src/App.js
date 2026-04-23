import React, { useState } from 'react';
import './App.css';
import FlightSearch from './FlightSearch';
import HotelSearch from './HotelSearch';
import TouristPlaces from './TouristPlaces';

function App() {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="app-container">
      {/* MMT Header */}
      <div className="mmt-header">
        <div className="mmt-logo">✈️ Make My Trip</div>
        <p className="mmt-tagline">Your Complete Travel Companion</p>
      </div>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'flights' ? 'active' : ''}`}
          onClick={() => setActiveTab('flights')}
        >
          ✈️ Flights
        </button>
        <button 
          className={`tab-button ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          🏨 Hotels
        </button>
        <button 
          className={`tab-button ${activeTab === 'places' ? 'active' : ''}`}
          onClick={() => setActiveTab('places')}
        >
          🎯 Places to Visit
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'flights' && <FlightSearch />}
        {activeTab === 'hotels' && <HotelSearch />}
        {activeTab === 'places' && <TouristPlaces />}
      </div>
    </div>
  );
}

export default App;

