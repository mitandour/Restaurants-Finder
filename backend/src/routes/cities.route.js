const express = require('express');
const citiesController = require('../controllers/cities.controller');

const router = express.Router();


router.route('/').get(citiesController.getAll);

module.exports = router;