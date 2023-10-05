'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stageEvent', [
      {
        eventId: 1,
        stageId: 1, 
      },
      {
        eventId: 2, 
        stageId: 2, 
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('stageEvent', null, {});
  },
};
