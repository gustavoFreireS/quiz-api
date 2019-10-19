const { migrationActions } = require('fastexpress');

module.exports = {
  up: migrationActions.createTable('Pessoas', Sequelize => ({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
  })),
  down: migrationActions.dropTable('Pessoas'),
};
