const faker = require('faker');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('Pessoas', [
      {
        name: faker.lorem.words(),
        email: faker.lorem.words(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    queryInterface.bulkDelete('Pessoas');
  },
};
