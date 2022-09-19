const express = require('express');
const route = express.Router();
const apiController = require('../controllers/apiController');

route.get('/people', apiController.fetchPeople);

route.get('/planets', apiController.fetchPlanets);

module.exports = route;
