const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const names = employees.some((nomeColaborador) => nomeColaborador.firstName === employeeName);
  if (employeeName === undefined) {
    return {};
  } if (names === true) {
    return employees.find((nomeColaborador) => nomeColaborador.firstName === employeeName);
  }
  return employees.find((sobrenomeColaborador) => sobrenomeColaborador.lastName === employeeName);
}

module.exports = getEmployeeByName;
