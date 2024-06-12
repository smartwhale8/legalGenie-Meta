const express = require('express');
const cors = require('cors');
const transcriptionRoutes = require('./routes/transcriptionRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', transcriptionRoutes);

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'An unexpected error occurred.' });
});

module.exports = app;
