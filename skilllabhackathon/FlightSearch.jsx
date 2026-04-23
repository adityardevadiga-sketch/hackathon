import React, { useState } from 'react';
import axios from 'axios';

function App() {
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
      setError('Unable to reach backend. Please start the server on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#eef2ff', padding: '32px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: 880, margin: '0 auto 24px', background: '#4338ca', borderRadius: 24, color: 'white', padding: 32, textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2.8rem' }}>Flight Search</h1>
        <p style={{ marginTop: 12, opacity: 0.9 }}>Search flights between cities and get instant results.</p>
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', display: 'grid', gap: 16, background: 'white', borderRadius: 24, padding: 24, boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)' }}>
        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ fontWeight: 600, color: '#374151' }}>From</label>
          <input style={{ border: '1px solid #d1d5db', borderRadius: 14, padding: 12, fontSize: '1rem' }} value={formData.from} onChange={(e) => setFormData({ ...formData, from: e.target.value })} placeholder="Departure city" />
        </div>

        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ fontWeight: 600, color: '#374151' }}>To</label>
          <input style={{ border: '1px solid #d1d5db', borderRadius: 14, padding: 12, fontSize: '1rem' }} value={formData.to} onChange={(e) => setFormData({ ...formData, to: e.target.value })} placeholder="Destination city" />
        </div>

        <div style={{ display: 'grid', gap: 8 }}>
          <label style={{ fontWeight: 600, color: '#374151' }}>Date</label>
          <input style={{ border: '1px solid #d1d5db', borderRadius: 14, padding: 12, fontSize: '1rem' }} type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        </div>

        <button style={{ background: '#4338ca', color: 'white', border: 'none', borderRadius: 14, padding: '14px 18px', fontSize: '1rem', cursor: 'pointer' }} onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </div>

      {error && <div style={{ maxWidth: 880, margin: '18px auto 0', background: '#fee2e2', borderRadius: 16, padding: 16, color: '#b91c1c' }}>{error}</div>}

      <div style={{ maxWidth: 880, margin: '24px auto 0', display: 'grid', gap: 16 }}>
        {flights.length === 0 && !loading ? (
          <div style={{ textAlign: 'center', padding: 28, borderRadius: 20, background: 'white', border: '1px solid #e5e7eb', color: '#4b5563' }}>No flights found yet. Click Search to begin.</div>
        ) : (
          flights.map((flight) => (
            <div key={flight.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 22px', borderRadius: 20, background: 'white', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)', border: '1px solid #e5e7eb' }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{flight.airline}</div>
                <div style={{ color: '#6b7280' }}>{flight.from} ➔ {flight.to}</div>
              </div>
              <div style={{ textAlign: 'right', color: '#4b5563' }}>
                <div>{flight.departureTime} - {flight.arrivalTime}</div>
                <div style={{ fontWeight: 700, color: '#111827' }}>₹{flight.price}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
