'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('meetGreet', [
      {
        eventId: 1, 
        location: 'Tulsa Assembly Center',
        time: new Date('1997-07-09 14:00:00'), 
      },
      {
        eventId: 2, 
        location: 'Dolby Live Park MGM',
        time: new Date('2023-02-20 16:30:00'), 
      },
 
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all records added in the 'up' function
    return queryInterface.bulkDelete('meetGreet', null, {});
  },
};
