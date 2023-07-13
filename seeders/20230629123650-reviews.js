'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        content: "Beaucoup de monde mais à ne pas rater",
        rating: 4,
        activityId: 1,
        userId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        content: "Belle avenue, un peu cher pour faire du shopping par contre",
        rating: 4,
        activityId: 2,
        userId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        content: "Incredible, really impressionnant monument. And the view from the top is Amazing",
        rating: 5,
        activityId: 1,
        userId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ],
    {});
    
  },
  
  async down (queryInterface, Sequelize) {
    /**
    * Add commands to revert seed here.
    *
    * Example:
    * await queryInterface.bulkDelete('People', null, {});
    */
  }
};
