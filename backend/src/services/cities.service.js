const data = require('../data/data');
const formatData = require('../utils/formatData');

const findAll = () => {
  return data.CITIES;
}

const findCityByName = (name) => {
  return findAll().find((city) => name == formatData.formatString(city.city));
}

const findById =  (id) => {
  return  findAll().find(x =>  x.id == id);
}

module.exports = {
  findAll,
  findCityByName,
  findById
}