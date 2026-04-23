const internationalFlights = [
  // India to Southeast Asia
  { id: 101, airline: 'Air India', from: 'Delhi', to: 'Bangkok', departureTime: '22:00', arrivalTime: '06:30+1', duration: '5h 30m', price: 18500, date: '2026-04-24', stops: 0, baggage: '23 kg', meals: 'Dinner & Breakfast' },
  { id: 102, airline: 'IndiGo', from: 'Delhi', to: 'Bangkok', departureTime: '20:30', arrivalTime: '05:00+1', duration: '5h 30m', price: 16800, date: '2026-04-24', stops: 1, baggage: '20 kg', meals: 'Snacks' },
  { id: 103, airline: 'Thai Airways', from: 'Delhi', to: 'Bangkok', departureTime: '23:00', arrivalTime: '07:30+1', duration: '5h 30m', price: 22000, date: '2026-04-24', stops: 0, baggage: '25 kg', meals: 'Premium' },
  
  { id: 104, airline: 'Air India', from: 'Mumbai', to: 'Singapore', departureTime: '21:00', arrivalTime: '05:00+1', duration: '6h', price: 21000, date: '2026-04-24', stops: 0, baggage: '23 kg', meals: 'Dinner & Breakfast' },
  { id: 105, airline: 'Singapore Airlines', from: 'Mumbai', to: 'Singapore', departureTime: '22:30', arrivalTime: '06:45+1', duration: '6h 15m', price: 25000, date: '2026-04-24', stops: 0, baggage: '25 kg', meals: 'Premium' },
  
  // India to Europe
  { id: 106, airline: 'Air India', from: 'Delhi', to: 'London', departureTime: '23:55', arrivalTime: '13:30+1', duration: '8h 35m', price: 45000, date: '2026-04-24', stops: 0, baggage: '23 kg', meals: 'Premium' },
  { id: 107, airline: 'British Airways', from: 'Delhi', to: 'London', departureTime: '22:00', arrivalTime: '11:45+1', duration: '8h 45m', price: 52000, date: '2026-04-24', stops: 0, baggage: '25 kg', meals: 'Premium' },
  { id: 108, airline: 'IndiGo', from: 'Mumbai', to: 'Paris', departureTime: '21:00', arrivalTime: '07:00+1', duration: '10h', price: 48000, date: '2026-04-24', stops: 1, baggage: '20 kg', meals: 'Snacks' },
  
  // India to USA
  { id: 109, airline: 'Air India', from: 'Delhi', to: 'New York', departureTime: '13:00', arrivalTime: '15:00', duration: '16h', price: 65000, date: '2026-04-24', stops: 0, baggage: '23 kg', meals: 'Premium' },
  { id: 110, airline: 'United Airlines', from: 'Delhi', to: 'New York', departureTime: '14:30', arrivalTime: '16:45', duration: '15h 15m', price: 70000, date: '2026-04-24', stops: 0, baggage: '25 kg', meals: 'Premium' },
  
  // India to Middle East
  { id: 111, airline: 'Emirates', from: 'Delhi', to: 'Dubai', departureTime: '08:00', arrivalTime: '10:15', duration: '3h 15m', price: 12000, date: '2026-04-24', stops: 0, baggage: '30 kg', meals: 'Lunch' },
  { id: 112, airline: 'Air India', from: 'Mumbai', to: 'Dubai', departureTime: '10:30', arrivalTime: '12:00', duration: '2h 30m', price: 9800, date: '2026-04-24', stops: 0, baggage: '23 kg', meals: 'Snacks' },
  { id: 113, airline: 'Qatar Airways', from: 'Delhi', to: 'Doha', departureTime: '23:00', arrivalTime: '03:00+1', duration: '4h', price: 14500, date: '2026-04-24', stops: 0, baggage: '30 kg', meals: 'Dinner & Breakfast' },
];

module.exports = internationalFlights;
