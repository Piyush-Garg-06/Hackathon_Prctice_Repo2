import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/rajasthan-routes')
            .then(response => response.json())
            .then(data => setRoutes(data))
            .catch(error => console.error('Error fetching destinations:', error));
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="logo">MyRoutes</div>
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/destination">Destinations</Link></li>
                    <li><Link to="/packages">Packages</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <section className="destination-main">
                <h2>Bus Routes in Rajasthan</h2>
                <div className="destination-grid">
                    {routes.map((route) => (
                        <Link to={`/rajasthan-route/${route.id}`} key={route.id} className="card-link">
                            <div className="destination-card">
                                <h3>{route.title}</h3>
                                <p><strong>Time:</strong> {route.time}</p>
                                <p><strong>Fare:</strong> {route.fare}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Destination;