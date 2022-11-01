const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const managers = employees.some((manager) => manager.managers
    .some((gerente1) => gerente1 === id));
  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const nomes = employees.filter((nome) => nome.managers.includes(managerId));
    const nomesFiltrados = nomes
      .map((nomeFiltrado) => `${nomeFiltrado.firstName} ${nomeFiltrado.lastName}`);
    return nomesFiltrados;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
