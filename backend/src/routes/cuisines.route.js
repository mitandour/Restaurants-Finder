const express = require('express');
const cuisinesController = require('../controllers/cuisines.controller')

const router = express.Router();

router.route('/').get(cuisinesController.getAll);

module.exports = router;