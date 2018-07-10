// require express
const express = require('express'); 
const app = express(); 

// PORT ACCESS
const port = 5000;

app.listen(port, () => {
  console.log('pokemon express is running on port: ', port);
});
