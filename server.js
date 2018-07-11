// require express
const express = require('express'); 
const app = express();
const pokemon = require('./models/pokemon'); 
const pokemonController = require('./controllers/pokemonController'); 
const methodOverride = require('method-override');

app.use(methodOverride('_method')); 


app.use('/pokemon', pokemonController); 

// PORT ACCESS
const port = 5000;


// app.get('/pokemon', (req, res) => {
//   res.send('Welcome to the Pokemon App!');
// }); 

app.listen(port, () => {
  console.log('pokemon express is running on port: ', port);
});

app.use((req, res, next) => {
  console.log('I run on every route.');
  next();
});
