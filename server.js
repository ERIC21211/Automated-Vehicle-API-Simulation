const express = require('express');
const app = express();
const telemetryRoutes = require('./routes/telemetry');

// Middleware
app.use(express.json());

// Routes
app.use('/api/telemetry', telemetryRoutes);

// Start server
// server.js
const app = require('./app');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = server; // export for test if needed
