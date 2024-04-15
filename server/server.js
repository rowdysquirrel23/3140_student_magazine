
// const express = require('express');
// const fs = require('fs').promises;

// const app = express();
// const PORT = 5000;
// const DATA_FILE_PATH = './data.json';

// app.use(express.json());

// app.post('/api', async (req, res) => {
//   try {
//     const existingData = JSON.parse(await fs.readFile(DATA_FILE_PATH));
//     const newData = req.body;
//     existingData.users.push(newData);
//     await fs.writeFile(DATA_FILE_PATH, JSON.stringify(existingData, null, 2));
//     res.json({ message: 'Form data submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting form data:', error);
//     res.status(500).json({ message: 'Failed to submit form data' });
//   }
// });

// app.get('/api', async (req, res) => {
//   try {
//     const data = JSON.parse(await fs.readFile(DATA_FILE_PATH));
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ message: 'Failed to fetch data' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 5000;
const DATA_FILE_PATH = './data.json';

app.use(express.json());

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

