import React, { useState } from 'react';
import axios from 'axios';
import { FiMapPin, FiDollarSign } from 'react-icons/fi';

function HotelSearch() {
  const [formData, setFormData] = useState({ city: 'Delhi', minPrice: 0, maxPrice: 50000 });
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/hotels/search', formData);
      setHotels(res.data);
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
        <div className="search-panel-hotels">
          <div className="search-field-hotels">
            <label><FiMapPin /> City</label>
            <input
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="Search by city"
            />
          </div>
          <div className="search-field-hotels">
            <label><FiDollarSign /> Min Price</label>
            <input
              type="number"
              value={formData.minPrice}
              onChange={(e) => setFormData({ ...formData, minPrice: parseInt(e.target.value) })}
              placeholder="Min price"
            />
          </div>
          <div className="search-field-hotels">
            <label><FiDollarSign /> Max Price</label>
            <input
              type="number"
              value={formData.maxPrice}
              onChange={(e) => setFormData({ ...formData, maxPrice: parseInt(e.target.value) })}
              placeholder="Max price"
            />
          </div>
          <button className="search-button-mmt" onClick={handleSearch} disabled={loading}>
            {loading ? '⏳ Searching...' : '🔍 Search Hotels'}
          </button>
        </div>
      </div>

      {error && <div className="error-box">⚠️ {error}</div>}

      {/* Results Section */}
      <div className="results-container">
        {hotels.length === 0 && !loading ? (
          <div className="empty-state">
            <span className="empty-icon">🏨</span>
            <p>No hotels found. Click Search to find your perfect stay!</p>
          </div>
        ) : (
          <div className="hotels-grid">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-header">
                  <div className="hotel-image">{hotel.image}</div>
                  <div className="hotel-rating">⭐ {hotel.rating}</div>
                </div>
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <p className="hotel-location">{hotel.city}</p>
                  <p className="hotel-description">{hotel.description}</p>
                </div>
                <div className="hotel-amenities">
                  {hotel.amenities.map((amenity, idx) => (
                    <span key={idx} className="amenity-tag">{amenity}</span>
                  ))}
                </div>
                <div className="hotel-footer">
                  <span className="hotel-price">₹{hotel.price.toLocaleString()}/night</span>
                  <button className="book-button-mmt">Book Now →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelSearch;
