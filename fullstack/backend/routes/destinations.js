const express = require("express");
const router = express.Router();

const destinations = [
  { id: "jaipur", name: "Jaipur", desc: "The Pink City, famous for Amer Fort, Hawa Mahal & colorful bazaars." },
  { id: "udaipur", name: "Udaipur", desc: "The City of Lakes, known for Lake Pichola & City Palace." },
  { id: "jaisalmer", name: "Jaisalmer", desc: "The Golden City with desert safaris & Jaisalmer Fort." },
  { id: "jodhpur", name: "Jodhpur", desc: "The Blue City, home to Mehrangarh Fort & blue houses." },
  { id: "mountabu", name: "Mount Abu", desc: "Rajasthan’s only hill station, with Dilwara Temples." },
  { id: "pushkar", name: "Pushkar", desc: "Holy town famous for Pushkar Lake & Camel Fair." },
];

router.get("/", (req, res) => {
  res.json(destinations);
});

module.exports = router;
