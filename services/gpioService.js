let ledStatus = "OFF";

exports.turnOnLED = () => {
  console.log("LED ON (mock)");
  ledStatus = "ON";
};

exports.turnOffLED = () => {
  console.log("LED OFF (mock)");
  ledStatus = "OFF";
};

exports.getStatus = () => ledStatus;
