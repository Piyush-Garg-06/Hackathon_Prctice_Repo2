import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Importing CSS for this component

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <header className="landing-header">Welcome My Website</header>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVe9dfx0Q_9WGq11vjFlSOg3F_uYo5pNObA&s"
        alt="Bus Image"
        className="bus-img"
      />
      <Link to="/home" className="explore-btn">Explore</Link>
    </div>
  );
};

export default LandingPage;