'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('band', [
      {
        name: 'Carpenters',
        genre: 'Melodic Pop',
        time_start: new Date('1972-07-9 10:00:00'),
        end_time: new Date('1972-07-9 12:00:00'),
      },
      {
        name: 'Lady Gaga',
        genre: 'Jazz',
        time_start: new Date('2023-06-20 15:00:00'),
        end_time: new Date('2023-06-20 17:00:00'),
      },
 
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('band', null, {});
  },
};
