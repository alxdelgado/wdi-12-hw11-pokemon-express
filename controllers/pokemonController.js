// Setting up the controller 
const express = require('express'); 
const router = express.Router(); 
const pokemon = require('../models/pokemon'); 

// Setting up the routers

// index route for pokemon 
router.get('/', (req, res) => {
  res.render('index.ejs', {
    pokemon: pokemon
  })
}); 

// Show route for pokemon 
router.get('/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id] 
  });
});

module.exports = router; 