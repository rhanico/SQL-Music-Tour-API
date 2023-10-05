'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('event', [
      {
        name: 'Carpenters',
        date: new Date('1997-07-09'),
      },
      {
        name: 'Lady Gaga',
        date: new Date('2023-02-20'),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('event', null, {});
  },
};
