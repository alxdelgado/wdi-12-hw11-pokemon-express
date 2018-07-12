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

// Create delete route 
router.delete('/:id', (req, res) => {
  pokemon.splice(req.params.id, 1)
  res.redirect('/pokemon')
});


// Create an edit route
router.get('/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: pokemon[req.params.i],
    i: req.params.i
  })
});

// Edit button submission
router.put('/:id', (req, res) => {
  pokemon[req.params.i] = req.body;
  res.redirect('/pokemon');
});

module.exports = router; 