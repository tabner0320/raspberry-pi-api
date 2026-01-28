const express = require("express");
const cors = require("cors");
const gpioRoutes = require("./routes/gpioRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/gpio", gpioRoutes);

app.get("/", (req, res) => {
  res.send("Raspberry Pi API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
