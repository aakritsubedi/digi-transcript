const express = require('express');

const app = express();
app.use(express.json({ extended: false }));

// Use API routes
app.use('/api', require('./routes/api'));

// Create a server
PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Server started at PORT: " + PORT.toString());
  }
})