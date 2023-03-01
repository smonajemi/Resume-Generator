const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});
