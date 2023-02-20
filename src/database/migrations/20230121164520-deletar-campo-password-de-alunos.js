module.exports = {
  up: async (queryInterface) => queryInterface.removeColumn(
    'alunos',
    'password',
  ),
  down: () => { },
};
