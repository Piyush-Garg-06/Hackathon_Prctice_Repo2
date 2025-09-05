import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
    const { type, id } = useParams();
    const [route, setRoute] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', passengers: 1 });
    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        setLoading(true);
        const endpoint = type === 'all-india' ? 
            `http://localhost:5000/api/all-india-routes/${id}` : 
            `http://localhost:5000/api/rajasthan-routes/${id}`;

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                setRoute(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching route details:', error);
                setLoading(false);
            });
    }, [id, type]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', formData);
        setIsBooked(true);
    };

    if (loading) return <div className="loading">Loading booking details...</div>;
    if (!route) return <div className="not-found">Route not found.</div>;

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
            <section className="booking-main">
                <h2>Book Your Seat on: <br />{route.title}</h2>
                <div className="booking-details-card">
                    <p><strong>Fare:</strong> {route.fare}</p>
                    <p><strong>Departure Time:</strong> {route.time}</p>
                    <p><strong>Buses per day:</strong> {route.busesPerDay}</p>
                </div>

                {isBooked ? (
                    <div className="confirmation-message">
                        <h3>Booking Confirmed!</h3>
                        <p>Thank you, {formData.name}! Your booking for {route.title} has been confirmed. A confirmation email has been sent to {formData.email}.</p>
                    </div>
                ) : (
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        
                        <label htmlFor="passengers">Number of Passengers</label>
                        <input type="number" id="passengers" name="passengers" value={formData.passengers} onChange={handleChange} min="1" required />

                        <button type="submit">Confirm Booking</button>
                    </form>
                )}
            </section>
        </>
    );
};

export default BookingForm;