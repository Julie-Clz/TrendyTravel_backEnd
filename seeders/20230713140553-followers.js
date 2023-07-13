'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Followers', [
      {
        followerId: 1,
        followedId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        followerId: 1,
        followedId: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        followerId: 2,
        followedId: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        followerId: 3,
        followedId: 1,
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
