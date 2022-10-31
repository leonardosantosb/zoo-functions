const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const idAnimals = species.filter((idAnimal) => ids.includes(idAnimal.id))
  if (ids === undefined) {
    return [];
  }
  return (idAnimals)
}

module.exports = getSpeciesByIds;

