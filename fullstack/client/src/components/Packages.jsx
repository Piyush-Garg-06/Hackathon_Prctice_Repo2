import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const packagesData = [
  { title: 'Delhi → Jaipur', description: 'AC Sleeper Coach with snacks and WiFi included. Enjoy royal Rajasthani vibes!', price: '₹599' },
  { title: 'Mumbai → Pune', description: 'Fast express route with reclining seats and mobile charging. Daily departures.', price: '₹399' },
  { title: 'Bangalore → Goa', description: 'Luxury semi-sleeper with music system and on-road movie streaming.', price: '₹999' },
  { title: 'Chennai → Hyderabad', description: 'Overnight sleeper with mineral water, blankets and pillows provided.', price: '₹749' },
  { title: 'Lucknow → Varanasi', description: 'Comfort AC travel with cultural commentary and holy stopovers enroute.', price: '₹459' },
  { title: 'Kolkata → Digha', description: 'Weekend express to beach town with breakfast & games onboard.', price: '₹349' },
  { title: 'Ahmedabad → Udaipur', description: 'Heritage ride with audio guide, Rajasthan folk music & snacks.', price: '₹699' },
  { title: 'Delhi → Manali', description: 'Volvo AC bus, snow view stops & overnight travel. Blankets provided.', price: '₹1,299' },
];

const Packages = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MyRoutes</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/destination">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <section className="section">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Popular Bus Packages</h2>
        <div className="packages-grid">
          {packagesData.map((pkg, index) => (
            <div className="package-card" key={index}>
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <div className="price">{pkg.price}</div>
              <button className="btn">Book Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Packages;