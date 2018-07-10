// require express
const express = require('express'); 
const app = express();
const Pokemon = require('./models/pokemon'); 

// PORT ACCESS
const port = 5000;


// app.get('/pokemon', (req, res) => {
//   res.send('Welcome to the Pokemon App!');
// }); 

// route for pokemon js 
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  })
}); 

app.listen(port, () => {
  console.log('pokemon express is running on port: ', port);
});
