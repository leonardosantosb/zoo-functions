const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  const acharSpecie = species.find((specie) => specie.name === animal.specie);
  const acharSexo = acharSpecie.residents.filter((acharSex) => acharSex.sex === animal.sex);
  if (!animal.sex) {
    return acharSpecie.residents.length;
  }
  return acharSexo.length;
}

module.exports = countAnimals;
