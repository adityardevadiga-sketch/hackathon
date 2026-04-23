const express = require('express');
const cors = require('cors');
const nationalFlights = require('./server/data/nationalFlights');
const internationalFlights = require('./server/data/internationalFlights');
const hotels = require('./server/data/hotels');
const touristPlaces = require('./server/data/touristPlaces');

const app = express();
app.use(cors());
app.use(express.json());

// Combine all flights
const allFlights = [...nationalFlights, ...internationalFlights];

// API Routes
app.get('/', (req, res) => {
  res.send('Make My Trip API is running. Use POST endpoints to search flights, hotels, and tourist places.');
});

// Flight Search API
app.post('/api/flights/search', (req, res) => {
  const { from = '', to = '', date = '', flightType = 'all' } = req.body;
  
  let flightsToSearch = allFlights;
  if (flightType === 'national') flightsToSearch = nationalFlights;
  if (flightType === 'international') flightsToSearch = internationalFlights;
  
  const results = flightsToSearch.filter((flight) => {
    const matchesFrom = flight.from.toLowerCase().includes(from.toLowerCase());
    const matchesTo = flight.to.toLowerCase().includes(to.toLowerCase());
    const matchesDate = date ? flight.date === date : true;
    return matchesFrom && matchesTo && matchesDate;
  });
  
  res.json(results);
});

// Hotel Search API
app.post('/api/hotels/search', (req, res) => {
  const { city = '', minPrice = 0, maxPrice = 100000 } = req.body;
  
  const results = hotels.filter((hotel) => {
    const matchesCity = hotel.city.toLowerCase().includes(city.toLowerCase());
    const withinPrice = hotel.price >= minPrice && hotel.price <= maxPrice;
    return matchesCity && withinPrice;
  });
  
  res.json(results);
});

// Tourist Places API
app.post('/api/places/search', (req, res) => {
  const { city = '' } = req.body;
  
  const results = touristPlaces.filter((place) => {
    return place.city.toLowerCase().includes(city.toLowerCase());
  });
  
  res.json(results);
});

// Get all hotels (no filter)
app.get('/api/hotels', (req, res) => {
  res.json(hotels);
});

// Get all tourist places (no filter)
app.get('/api/places', (req, res) => {
  res.json(touristPlaces);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Make My Trip Backend running on http://localhost:${PORT}`));
