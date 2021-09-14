const data = require('../data/data');
const citiesService = require('../services/cities.service');
const cuisinesService = require('../services/cuisines.service');
const restaurantCuisinesService = require('../services/restaurantCuisines.service');
const log = require('debug')('app:restaurant-service')


const findAll =  () => {
  return data.RESTAURANTS;
}

const filter = async (filters) => {
  log(`filtering for cuisine= ${filters.cuisine} & city = ${filters.city} ...`);

  const city = citiesService.findCityByName(filters.city);
  const cuisine = cuisinesService.findCuisineByName(filters.cuisine);
  
  const filteredRestaurants =  findAll().filter(restaurant => {
    let isValid = true;
    if (city) {
      isValid = isValid && restaurant.city_id == city.id 
    }
    if (cuisine) {
      const restaurantsCuisines = restaurantCuisinesService.findRestaurantsIdsByCuisine(cuisine.id);
      isValid = isValid && restaurantsCuisines.includes(restaurant.id);
    }
    return isValid;
  });

  log(`found ${filteredRestaurants.length} results ...`);
  return filteredRestaurants.map(restaurant => getRestaurantDetails(restaurant.id));
}

const getRestaurantDetails = (id) => {
  const restaurant = findById(id);
  const city = citiesService.findById(restaurant.city_id).city;
  const cuisineIds = restaurantCuisinesService.findCuisineIdsByRestaurant(restaurant.id);
  const cuisines = cuisineIds.map((cuisine_id) => {
                                  const cuisine = cuisinesService.findById(cuisine_id);
                                  return cuisine.name;
                                });
  return {
    ...restaurant,
    city,
    cuisines
  }
}

const findById =  (id) => {
  return  findAll().find(x =>  x.id == id);
}


module.exports = {
  findAll,
  filter,
  findById,
  getRestaurantDetails
}