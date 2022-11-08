const data = require('../data/zoo_data');

const vazio = [];
data.employees.forEach((employee) =>
  vazio.push({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: data.species.filter((specie) =>
      employee.responsibleFor.includes(specie.id))
      .map((nomeEspecie) => nomeEspecie.name),
    locations: data.species.filter((specie) =>
      employee.responsibleFor.includes(specie.id))
      .map((lugarEspecie) => lugarEspecie.location),
  }));

function getEmployeesCoverage(obj) {
  if (obj === undefined) return vazio;
  const { name, id } = obj;
  if (vazio.find((employee) => employee.id === id)) {
    return vazio.find((employee) => employee.id === id);
  }
  if (vazio.find((employee) => employee.fullName.includes(name))) {
    return vazio.find((employee) => employee.fullName.includes(name));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
