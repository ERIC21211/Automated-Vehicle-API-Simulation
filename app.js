// app.js
const express = require('express');
const telemetryRouter = require('./routes/telemetry');

const app = express();

app.use(express.json());
app.use('/api/telemetry', telemetryRouter);

module.exports = app;
