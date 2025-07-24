const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ✅ Serve static files (script.js, images, etc.) from /app
app.use(express.static(path.join(__dirname, "app")));

// ✅ Serve the correct virtual-tour.html file from /app/views
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "views", "virtual-tour.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
