const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require("./config/database");

// Connect to database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/applicantsdb", {
    useMongoClient: true
  }
);

const app = express();

const applicants = require('./routes/applicants');

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/api', applicants);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});