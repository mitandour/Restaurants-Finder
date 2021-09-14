const express = require('express');
const cities = require('./cities.route');
const restaurants = require('./restaurants.route');
const cuisines = require('./cuisines.route');


const router = express.Router();

router.use('/restaurants', restaurants);
router.use('/cities', cities);
router.use('/cuisines', cuisines);

module.exports =  router;