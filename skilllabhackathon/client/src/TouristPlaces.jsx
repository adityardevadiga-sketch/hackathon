import React, { useState } from 'react';
import axios from 'axios';
import { FiMapPin } from 'react-icons/fi';

function TouristPlaces() {
  const [city, setCity] = useState('Delhi');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/places/search', { city });
      setPlaces(res.data);
    } catch (err) {
      console.error('Search failed', err);
      setError('Unable to reach backend. Please start the server on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-feature">
      {/* Search Panel */}
      <div className="search-wrapper">
        <div className="search-panel-places">
          <div className="search-field-places">
            <label><FiMapPin /> City</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search by city"
            />
          </div>
          <button className="search-button-mmt" onClick={handleSearch} disabled={loading}>
            {loading ? '⏳ Searching...' : '🔍 Find Places'}
          </button>
        </div>
      </div>

      {error && <div className="error-box">⚠️ {error}</div>}

      {/* Results Section */}
      <div className="results-container">
        {places.length === 0 && !loading ? (
          <div className="empty-state">
            <span className="empty-icon">🎯</span>
            <p>No tourist places found. Click Search to explore!</p>
          </div>
        ) : (
          <div className="places-grid">
            {places.map((place) => (
              <div key={place.id} className="place-card">
                <div className="place-image">{place.image}</div>
                <div className="place-info">
                  <h3>{place.name}</h3>
                  <div className="place-rating">⭐ {place.rating}</div>
                  <p className="place-description">{place.description}</p>
                </div>
                <div className="place-details">
                  <div className="detail-item">
                    <span className="detail-label">Best Time:</span>
                    <span className="detail-value">{place.bestTime}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{place.duration}</span>
                  </div>
                </div>
                <button className="explore-button">Explore Now →</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TouristPlaces;
