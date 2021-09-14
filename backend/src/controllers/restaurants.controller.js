const restaurantService = require('../services/restaurants.services');

const getRestaurants = async (req, res) => {
  const filters = req.query;
  const filteredRestaurants = await restaurantService.filter(filters);
  res.send(filteredRestaurants);
}

const getById = async (req, res) => {
  const restaurant_id = req.params.id;
  const restaurant = await restaurantService.findById(restaurant_id);
  res.status(200).json(restaurant);
}

module.exports = {
  getRestaurants,
  getById
}