// const express = require('express')

// const app = express()

// app.get("/api", (req, res) => {
//     res.json({"users": ["user1", "user2", "user3"]})
// })

// app.listen(5000, () => {console.log("Server loaded on port 5000")})

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

let users = []; // Backend data storage (array of user objects)

app.post('/api', (req, res) => {
  const userData = req.body;
  users.push(userData);
  console.log('New user added:', userData);
  res.json({ message: 'User added successfully', user: userData });
});

app.listen(PORT, () => {
  console.log(`Server loaded on port ${PORT}`);
});