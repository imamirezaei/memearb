const express = require('express');
const path = require('path');
const app = express();

// Import routes
const indexRoutes = require('./routes/index');

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use the index route
app.use('/', indexRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});