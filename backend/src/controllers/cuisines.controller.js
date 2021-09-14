const cuisineService = require('../services/cuisines.service');

  const getAll = async (req, res, next) => {
    const cuisines = await cuisineService.findAll();
    res.status(200).json(cuisines);
  }


module.exports = {
  getAll
}