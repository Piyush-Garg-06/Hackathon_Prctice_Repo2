import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/all-india-routes')
            .then(response => response.json())
            .then(data => setRoutes(data))
            .catch(error => console.error('Error fetching data:', error));
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
            <section className="main">
                {routes.map((route) => (
                    <Link to={`/all-india-route/${route.id}`} key={route.id} className="card-link">
                        <div className="card">
                            <h3>{route.title}</h3>
                            <p>{route.description}</p>
                            <p>Time: {route.time}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
};

export default Home;