const express = require("express");
const cors = require("cors");
const path = require("path");
const gpioRoutes = require("./routes/gpioRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve the dashboard from the public folder
app.use(express.static(path.join(__dirname, "public")));

// GPIO API routes
app.use("/api/gpio", gpioRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});