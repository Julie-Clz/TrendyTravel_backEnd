'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 3,
        postId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 2,
        postId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        userId: 1,
        postId: 2,
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
