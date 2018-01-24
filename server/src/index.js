'use strict';

const express = require('express');
const path = require('path');

// var constant
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// app
const app = express();

// API
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  };
  res.send(JSON.stringify(data, null, 2));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
