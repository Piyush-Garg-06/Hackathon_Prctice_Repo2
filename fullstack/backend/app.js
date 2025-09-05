const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// --- 1. All India Bus Routes Data (for Home Page) ---
const allIndiaRoutes = [
    {
        id: 1,
        title: 'Delhi → Mumbai',
        description: 'Luxury AC Sleeper Coach with WiFi and meals.',
        time: '09:00 PM',
        fare: '₹1,500',
        busesPerDay: 5,
        stoppages: ['Jaipur', 'Ahmedabad', 'Surat']
    },
    {
        id: 2,
        title: 'Bangalore → Chennai',
        description: 'Superfast service with reclining seats and charging points.',
        time: '06:00 AM',
        fare: '₹500',
        busesPerDay: 10,
        stoppages: ['Vellore', 'Krishnagiri']
    },
    {
        id: 3,
        title: 'Hyderabad → Tirupati',
        description: 'A dedicated service for devotees with on-board refreshments.',
        time: '08:45 PM',
        fare: '₹850',
        busesPerDay: 4,
        stoppages: ['Kurnool', 'Kadapa']
    },
    {
        id: 4,
        title: 'Kolkata → Digha',
        description: 'Weekend express to a beach town with breakfast & games onboard.',
        time: '06:15 AM',
        fare: '₹349',
        busesPerDay: 8,
        stoppages: ['Howrah', 'Kolaghat']
    },
    {
        id: 5,
        title: 'Pune → Shirdi',
        description: 'Daily pilgrimage route with express service. Comfortable seating.',
        time: '05:00 AM',
        fare: '₹350',
        busesPerDay: 8,
        stoppages: ['Nagar Road', 'Ranjangaon', 'Ahmednagar']
    },
    {
        id: 6,
        title: 'Delhi → Manali',
        description: 'Volvo AC bus, with scenic stops & overnight travel.',
        time: '09:00 PM',
        fare: '₹1,299',
        busesPerDay: 2,
        stoppages: ['Murthal', 'Karnal', 'Mandi', 'Kullu']
    },
    {
        id: 7,
        title: 'Chennai → Bangalore',
        description: 'Comfortable day journey with AC and pushback seats.',
        time: '07:30 AM',
        fare: '₹450',
        busesPerDay: 12,
        stoppages: ['Kanchipuram', 'Vellore']
    },
    {
        id: 8,
        title: 'Goa → Pune',
        description: 'Scenic night travel with music system and refreshments.',
        time: '11:00 PM',
        fare: '₹750',
        busesPerDay: 6,
        stoppages: ['Panaji', 'Kolhapur']
    },
    {
        id: 9,
        title: 'Lucknow → Varanasi',
        description: 'Semi-sleeper with WiFi and a movie playing.',
        time: '08:00 AM',
        fare: '₹600',
        busesPerDay: 4,
        stoppages: ['Sultanpur', 'Faizabad']
    },
    {
        id: 10,
        title: 'Delhi → Rishikesh',
        description: 'Adventure travel with a local guide and scenic stops.',
        time: '05:00 AM',
        fare: '₹899',
        busesPerDay: 3,
        stoppages: ['Meerut', 'Haridwar']
    },
    {
        id: 11,
        title: 'Indore → Bhopal',
        description: 'Express non-stop route connecting two major cities.',
        time: '07:00 AM',
        fare: '₹300',
        busesPerDay: 15,
        stoppages: ['Dewas']
    },
    {
        id: 12,
        title: 'Patna → Ranchi',
        description: 'Direct AC bus connecting two state capitals.',
        time: '10:00 PM',
        fare: '₹720',
        busesPerDay: 2,
        stoppages: ['Gaya', 'Hazaribagh']
    },
];

// --- 2. Rajasthan-Specific Routes Data (for Destination Page) ---
const rajasthanRoutes = [
    {
        id: 1,
        title: 'Jaipur Sightseeing',
        description: 'A day tour covering all major attractions.',
        time: '09:00 AM',
        fare: '₹400',
        busesPerDay: 3,
        stoppages: ['Hawa Mahal', 'Amer Fort', 'City Palace', 'Jantar Mantar']
    },
    {
        id: 2,
        title: 'Udaipur to Mount Abu',
        description: 'A scenic bus ride through the Aravalli hills.',
        time: '10:30 AM',
        fare: '₹550',
        busesPerDay: 2,
        stoppages: ['Sirohi', 'Abu Road']
    },
    {
        id: 3,
        title: 'Jodhpur to Jaisalmer',
        description: 'Connecting the Blue City to the Golden City.',
        time: '12:00 PM',
        fare: '₹750',
        busesPerDay: 4,
        stoppages: ['Osian', 'Pokhran']
    },
    {
        id: 4,
        title: 'Delhi → Jaipur',
        description: 'Comfortable bus journey with multiple stopovers.',
        time: '08:00 AM',
        fare: '₹599',
        busesPerDay: 6,
        stoppages: ['Dhaula Kuan', 'Manesar']
    },
    {
        id: 5,
        title: 'Jaipur → Jodhpur',
        description: 'Fast express AC route. Perfect for a quick trip.',
        time: '11:00 AM',
        fare: '₹650',
        busesPerDay: 5,
        stoppages: ['Ajmer', 'Beawar', 'Pali']
    },
    {
        id: 6,
        title: 'Udaipur → Jaipur',
        description: 'Overnight sleeper with comfortable seating and blankets.',
        time: '10:00 PM',
        fare: '₹700',
        busesPerDay: 3,
        stoppages: ['Chittorgarh', 'Ajmer']
    },
    {
        id: 7,
        title: 'Jaisalmer → Barmer',
        description: 'Desert route with local folk music on board.',
        time: '02:00 PM',
        fare: '₹300',
        busesPerDay: 1,
        stoppages: ['Devikot', 'Balotra']
    },
    {
        id: 8,
        title: 'Pushkar → Ajmer',
        description: 'Short spiritual bus ride. Frequent departures.',
        time: '07:30 AM',
        fare: '₹100',
        busesPerDay: 10,
        stoppages: []
    },
    {
        id: 9,
        title: 'Bikaner to Jaipur',
        description: 'Connecting the desert city to the capital via a reliable service.',
        time: '09:00 PM',
        fare: '₹850',
        busesPerDay: 3,
        stoppages: ['Nagaur', 'Sikar', 'Chomu']
    },
    {
        id: 10,
        title: 'Ranthambore Safari Bus',
        description: 'Bus service to the tiger reserve with guided tour included.',
        time: '05:00 AM',
        fare: '₹700',
        busesPerDay: 1,
        stoppages: ['Sawai Madhopur', 'Sherpur']
    },
    {
        id: 11,
        title: 'Mount Abu to Udaipur',
        description: 'Downhill ride with a view of the beautiful landscapes.',
        time: '02:30 PM',
        fare: '₹500',
        busesPerDay: 2,
        stoppages: ['Pindwara', 'Gogunda']
    },
    {
        id: 12,
        title: 'Jaipur to Bikaner',
        description: 'Overnight sleeper connecting two major cities of Rajasthan.',
        time: '11:00 PM',
        fare: '₹800',
        busesPerDay: 4,
        stoppages: ['Sikar', 'Fatehpur Shekhawati']
    }
];

// --- API Endpoints ---
app.get('/api/all-india-routes', (req, res) => {
    res.json(allIndiaRoutes);
});

app.get('/api/rajasthan-routes', (req, res) => {
    res.json(rajasthanRoutes);
});

app.get('/api/all-india-routes/:id', (req, res) => {
    const routeId = parseInt(req.params.id);
    const route = allIndiaRoutes.find(r => r.id === routeId);
    if (route) {
        res.json(route);
    } else {
        res.status(404).send('Route not found');
    }
});

app.get('/api/rajasthan-routes/:id', (req, res) => {
    const routeId = parseInt(req.params.id);
    const route = rajasthanRoutes.find(r => r.id === routeId);
    if (route) {
        res.json(route);
    } else {
        res.status(404).send('Route not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});