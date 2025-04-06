const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the React application for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

