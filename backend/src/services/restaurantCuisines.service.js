const data = require('../data/data');

const findAll = () => {
  return data.RESTAURANTS_CUISINES;
}

const findRestaurantsIdsByCuisine = (cuisine_id) => {
  return findAll()
            .filter(el => el.cuisine_id == cuisine_id)
            .map(el => el.restaurant_id);
}

const findCuisineIdsByRestaurant = (restaurant_id) => {
  return findAll()
            .filter(restaurantCuisine => restaurantCuisine.restaurant_id == restaurant_id)
            .map(restaurantCuisine => restaurantCuisine.cuisine_id);
}

module.exports = {
  findRestaurantsIdsByCuisine,
  findCuisineIdsByRestaurant
}