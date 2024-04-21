
const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 5000;
const DATA_FILE_PATH = './data.json';
const rateLimit = require('express-rate-limit');

// Apply the rate limiter to all routes

app.use(express.json());

// Define rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 6, // Maximum 6 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});

app.use('/api', limiter);

app.post('/api', async (req, res) => {
  try {
    const existing_data = JSON.parse(await fs.readFile(DATA_FILE_PATH));
    const new_data = req.body;
    existing_data.users.push(new_data);
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(existing_data, null, 2));
    res.json({ message: 'Form data submitted successfully' });
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).json({ message: 'Failed to submit form data' });
  }
});

app.get('/api', async (req, res) => {
  try {
    const data = JSON.parse(await fs.readFile(DATA_FILE_PATH));
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

