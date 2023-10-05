'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stage', [
      {
        name: 'Assembly Stage', 
      },
      {
        name: 'Dolby Stage', 
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('stage', null, {});
  },
};
