const express = require("express");
const router = express.Router();
const {
  turnOn,
  turnOff,
  getStatus
} = require("../controllers/gpioController");

router.post("/on", turnOn);
router.post("/off", turnOff);
router.get("/status", getStatus);

module.exports = router;
