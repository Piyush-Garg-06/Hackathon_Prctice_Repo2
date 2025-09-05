const express = require("express");
const router = express.Router();

let messages = []; // Store messages temporarily

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMessage = { id: messages.length + 1, name, email, message };
  messages.push(newMessage);

  res.json({ success: true, message: "Message received", data: newMessage });
});

router.get("/", (req, res) => {
  res.json(messages); // For admin to fetch all messages
});

module.exports = router;

