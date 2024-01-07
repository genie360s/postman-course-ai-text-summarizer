const express = require('express');
const app = express();
const port = 3000;


// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});