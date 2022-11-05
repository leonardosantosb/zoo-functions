const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoaResponsavel = employees.find((pessoa) => pessoa.id === id).responsibleFor[0];

  const animais = species.find((animal) => animal.id === pessoaResponsavel)
  const maisVelho = animais.residents.sort((a, b) => b.age - a.age) [0];  
    
  return Object.values(maisVelho)
}
module.exports = getOldestFromFirstSpecies;
