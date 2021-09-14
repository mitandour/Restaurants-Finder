const data = require('../data/data');
const formatData = require('../utils/formatData');


const findAll = () => {
  return data.CUISINES;
}

const findCuisineByName = (name) => {
  return findAll().find((cuisine) => name == formatData.formatString(cuisine.name));
}

const findById =  (id) => {
  return  findAll().find(x =>  x.id == id);
}

module.exports = {
  findAll,
  findById,
  findCuisineByName
}