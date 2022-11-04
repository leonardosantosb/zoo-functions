const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = (entrants.filter((entrant) => entrant.age < 18)).length;
  const adult = (entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50)).length;
  const senior = (entrants.filter((entrant) => entrant.age >= 50)).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { ...price } = data.prices;
  const preco = countEntrants(entrants);
  return ((preco.child * price.child) + (preco.adult * price.adult)
   + (preco.senior * price.senior));
}

module.exports = { calculateEntry, countEntrants };
