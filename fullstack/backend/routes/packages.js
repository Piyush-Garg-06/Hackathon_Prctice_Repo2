const express = require("express");
const router = express.Router();

const packages = [
  { id: 1, route: "Delhi → Jaipur", desc: "AC Sleeper Coach with snacks and WiFi included.", price: 599 },
  { id: 2, route: "Mumbai → Pune", desc: "Fast express route with reclining seats and mobile charging.", price: 399 },
  { id: 3, route: "Bangalore → Goa", desc: "Luxury semi-sleeper with music system and on-road movie streaming.", price: 999 },
  { id: 4, route: "Chennai → Hyderabad", desc: "Overnight sleeper with mineral water, blankets and pillows provided.", price: 749 },
];

router.get("/", (req, res) => {
  res.json(packages);
});

module.exports = router;
    