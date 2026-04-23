import React, { useState } from 'react';
import axios from 'axios';
import { FiMapPin, FiCalendar, FiArrowRight, FiAward } from 'react-icons/fi';
import { MdFlightTakeoff, MdLuggage, MdRestaurantMenu } from 'react-icons/md';

function FlightSearch() {
  const [formData, setFormData] = useState({ from: 'Delhi', to: 'Bengaluru', date: '2026-04-24' });
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/flights/search', formData);
      setFlights(res.data);
    } catch (err) {
      console.error('Search failed', err);
      setError('Unable to reach backend. Please start the server on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Header with gradient */}
      <div className="header-banner">
        <div className="header-content">
          <h1><MdFlightTakeoff className="header-icon" /> Flight Booking</h1>
          <p>Find and book your perfect flight</p>
        </div>
      </div>

      {/* Search Panel */}
      <div className="search-wrapper">
        <div className="search-panel">
          <div className="search-field">
            <label><FiMapPin /> From</label>
            <input
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              placeholder="Departure city"
            />
          </div>
          <div className="search-field">
            <label><FiArrowRight /></label>
            <div className="arrow-spacer"></div>
          </div>
          <div className="search-field">
            <label><FiMapPin /> To</label>
            <input
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              placeholder="Destination city"
            />
          </div>
          <div className="search-field">
            <label><FiCalendar /> Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <button className="search-button" onClick={handleSearch} disabled={loading}>
            {loading ? '⏳ Searching...' : '🔍 Search'}
          </button>
        </div>
      </div>

      {error && <div className="error-box">⚠️ {error}</div>}

      {/* Results Section */}
      <div className="results-container">
        {flights.length === 0 && !loading ? (
          <div className="empty-state">
            <MdFlightTakeoff className="empty-icon" />
            <p>No flights found. Click Search to begin your journey!</p>
          </div>
        ) : (
          <div className="flights-grid">
            {flights.map((flight) => (
              <div key={flight.id} className="flight-card">
                <div className="flight-header">
                  <div className="airline-info">
                    <div className="airline-badge">{flight.airline.charAt(0)}</div>
                    <div>
                      <div className="airline-name">{flight.airline}</div>
                      <div className="flight-code">✈️ {flight.stops === 0 ? 'Non-stop' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}</div>
                    </div>
                  </div>
                  <div className="price-badge">₹{flight.price.toLocaleString()}</div>
                </div>

                <div className="flight-timeline">
                  <div className="time-column">
                    <div className="time-large">{flight.departureTime}</div>
                    <div className="time-small">{flight.from}</div>
                  </div>
                  <div className="duration-column">
                    <div className="duration">{flight.duration}</div>
                    <div className="flight-path">━━━ ✈️ ━━━</div>
                  </div>
                  <div className="time-column">
                    <div className="time-large">{flight.arrivalTime}</div>
                    <div className="time-small">{flight.to}</div>
                  </div>
                </div>

                <div className="flight-amenities">
                  <div className="amenity">
                    <MdLuggage className="amenity-icon" />
                    <span>{flight.baggage}</span>
                  </div>
                  <div className="amenity">
                    <MdRestaurantMenu className="amenity-icon" />
                    <span>{flight.meals}</span>
                  </div>
                  <div className="amenity">
                    <FiAward className="amenity-icon" />
                    <span>WiFi {Math.random() > 0.5 ? '✓' : '✗'}</span>
                  </div>
                </div>

                <button className="book-button">Book Now →</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightSearch;
