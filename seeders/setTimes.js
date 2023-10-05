'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('setTime', [
      {
        eventId: 1, 
        startTime: new Date('2023-02-20 14:00:00'), 
        endTime: new Date('2023-02-20 15:30:00'), 
      },
      {
        eventId: 2, // 
        startTime: new Date('2023-03-10 16:00:00'),
        endTime: new Date('2023-03-10 17:30:00'),
      },
  
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('setTime', null, {});
  },
};
