import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './AllIndiaRouteDetails.css';

const AllIndiaRouteDetails = () => {
    const { id } = useParams();
    const [route, setRoute] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/api/all-india-routes/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setRoute(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching route details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="loading">Loading details...</div>;
    }

    if (!route) {
        return <div className="not-found">Route not found.</div>;
    }

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
            <section className="details-main">
                <h2>{route.title}</h2>
                <div className="details-card">
                    <p><strong>Description:</strong> {route.description}</p>
                    <p><strong>Departure Time:</strong> {route.time}</p>
                    <p><strong>Buses per day:</strong> {route.busesPerDay}</p>
                    <p><strong>Fare:</strong> {route.fare}</p>
                    <div className="stoppages">
                        <h4>Stoppages:</h4>
                        <ul>
                            {route.stoppages.map((stop, index) => (
                                <li key={index}>{stop}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="book-btn-container">
                    <Link to={`/book/all-india/${route.id}`} className="book-now-btn">Book Now</Link>
                </p>
            </section>
        </>
    );
};

export default AllIndiaRouteDetails;