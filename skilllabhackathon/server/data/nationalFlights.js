const nationalFlights = [
  // Delhi - Bengaluru
  { id: 1, airline: 'IndiGo', from: 'Delhi', to: 'Bengaluru', departureTime: '06:00', arrivalTime: '08:45', duration: '2h 45m', price: 5200, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'Complimentary' },
  { id: 2, airline: 'Air India', from: 'Delhi', to: 'Bengaluru', departureTime: '09:00', arrivalTime: '11:50', duration: '2h 50m', price: 6100, date: '2026-04-24', stops: 0, baggage: '20 kg', meals: 'Lunch' },
  { id: 3, airline: 'Vistara', from: 'Delhi', to: 'Bengaluru', departureTime: '14:20', arrivalTime: '17:10', duration: '2h 50m', price: 7500, date: '2026-04-24', stops: 0, baggage: '20 kg', meals: 'Premium' },
  { id: 4, airline: 'SpiceJet', from: 'Delhi', to: 'Bengaluru', departureTime: '18:45', arrivalTime: '21:30', duration: '2h 45m', price: 4800, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'None' },
  { id: 5, airline: 'Akasa Air', from: 'Delhi', to: 'Bengaluru', departureTime: '22:00', arrivalTime: '00:45', duration: '2h 45m', price: 4500, date: '2026-04-24', stops: 1, baggage: '15 kg', meals: 'None' },
  
  // Delhi - Mumbai
  { id: 6, airline: 'IndiGo', from: 'Delhi', to: 'Mumbai', departureTime: '07:30', arrivalTime: '09:15', duration: '1h 45m', price: 4500, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'Breakfast' },
  { id: 7, airline: 'Air India', from: 'Delhi', to: 'Mumbai', departureTime: '11:00', arrivalTime: '13:00', duration: '2h', price: 6000, date: '2026-04-24', stops: 0, baggage: '20 kg', meals: 'Lunch' },
  { id: 8, airline: 'GoAir', from: 'Delhi', to: 'Mumbai', departureTime: '15:30', arrivalTime: '17:20', duration: '1h 50m', price: 5200, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'None' },
  
  // Delhi - Goa
  { id: 9, airline: 'IndiGo', from: 'Delhi', to: 'Goa', departureTime: '08:00', arrivalTime: '11:30', duration: '3h 30m', price: 5800, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'Snacks' },
  { id: 10, airline: 'Air India', from: 'Delhi', to: 'Goa', departureTime: '10:00', arrivalTime: '13:45', duration: '3h 45m', price: 6500, date: '2026-04-24', stops: 0, baggage: '20 kg', meals: 'Lunch' },
  
  // Mumbai - Goa
  { id: 11, airline: 'IndiGo', from: 'Mumbai', to: 'Goa', departureTime: '09:00', arrivalTime: '10:15', duration: '1h 15m', price: 3500, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'None' },
  { id: 12, airline: 'SpiceJet', from: 'Mumbai', to: 'Goa', departureTime: '14:30', arrivalTime: '15:45', duration: '1h 15m', price: 3200, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'None' },
  
  // Bengaluru - Hyderabad
  { id: 13, airline: 'IndiGo', from: 'Bengaluru', to: 'Hyderabad', departureTime: '06:30', arrivalTime: '07:45', duration: '1h 15m', price: 2800, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'None' },
  { id: 14, airline: 'Air India', from: 'Bengaluru', to: 'Hyderabad', departureTime: '12:00', arrivalTime: '13:30', duration: '1h 30m', price: 3800, date: '2026-04-24', stops: 0, baggage: '20 kg', meals: 'Lunch' },
  
  // Delhi - Jaipur
  { id: 15, airline: 'IndiGo', from: 'Delhi', to: 'Jaipur', departureTime: '07:00', arrivalTime: '08:30', duration: '1h 30m', price: 2500, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'None' },
  { id: 16, airline: 'SpiceJet', from: 'Delhi', to: 'Jaipur', departureTime: '16:00', arrivalTime: '17:30', duration: '1h 30m', price: 2800, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'Snacks' },
  
  // Delhi - Kolkata
  { id: 17, airline: 'Air India', from: 'Delhi', to: 'Kolkata', departureTime: '08:00', arrivalTime: '11:00', duration: '3h', price: 5500, date: '2026-04-24', stops: 0, baggage: '20 kg', meals: 'Breakfast' },
  { id: 18, airline: 'IndiGo', from: 'Delhi', to: 'Kolkata', departureTime: '14:00', arrivalTime: '17:15', duration: '3h 15m', price: 4800, date: '2026-04-24', stops: 0, baggage: '15 kg', meals: 'None' },
];

module.exports = nationalFlights;
