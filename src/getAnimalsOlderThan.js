const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((animalName) => animalName.name === animal)
    .residents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
