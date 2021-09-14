const express = require('express');
const restaurantController = require('../controllers/restaurants.controller');

const router = express.Router();

router.route('/').get(restaurantController.getRestaurants);

router.route('/:id').get(restaurantController.getById);

module.exports = router;