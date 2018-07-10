// require express
const express = require('express'); 
const app = express();
const Pokemon = require('./models/pokemon'); 

// PORT ACCESS
const port = 5000;


app.get('/pokemon', (req, res) => {
  res.render('Welcome to the Pokemon App!');
}); 

app.listen(port, () => {
  console.log('pokemon express is running on port: ', port);
});
