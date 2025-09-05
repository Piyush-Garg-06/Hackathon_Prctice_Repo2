import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Destination from './components/Destination';
import Packages from './components/Packages';
import Contact from './components/Contact';
import AllIndiaRouteDetails from './components/AllIndiaRouteDetails';
import RajasthanRouteDetails from './components/RajasthanRouteDetails';
import BookingForm from './components/BookingForm'; // Import the new component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/all-india-route/:id" element={<AllIndiaRouteDetails />} />
                <Route path="/rajasthan-route/:id" element={<RajasthanRouteDetails />} />
                <Route path="/book/:type/:id" element={<BookingForm />} />
            </Routes>
        </Router>
    );
}

export default App;