const gpioService = require("../services/gpioService");

exports.turnOn = (req, res) => {
  gpioService.turnOnLED();
  res.json({ status: "ON" });
};

exports.turnOff = (req, res) => {
  gpioService.turnOffLED();
  res.json({ status: "OFF" });
};

exports.getStatus = (req, res) => {
  const status = gpioService.getStatus();
  res.json({ status });
};
