const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const storeFile = path.join(__dirname, "appointmentStore.json");

// GET all appointments
router.get("/appointments", (req, res) => {
  const data = JSON.parse(fs.readFileSync(storeFile, "utf-8"));
  res.json(data);
});

// POST new appointment
router.post("/appointments", (req, res) => {
  const data = JSON.parse(fs.readFileSync(storeFile, "utf-8"));
  data.push(req.body);
  fs.writeFileSync(storeFile, JSON.stringify(data, null, 2));
  res.json({ status: "booked" });
});

module.exports = router;
