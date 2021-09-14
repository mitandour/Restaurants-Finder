const citiesService = require('../services/cities.service');

  const getAll = async (req, res, next) => {
    const cities = await citiesService.findAll();
    res.status(200).json(cities);
  }


module.exports = {
  getAll
}