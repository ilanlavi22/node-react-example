'use strict';

const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');


router.get('/list', (req, res, next) => {
  Pet.find()
    .then((pets) => {
      res.json({ pets })
    })
    .catch((error) => {
      next(error);
    });

});

router.post('/', (req, res, next) => {
  const { name, species, picture } = req.body;
  Pet.create({ name, species, picture })
    .then((pet) => {
      res.json({ pet });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
