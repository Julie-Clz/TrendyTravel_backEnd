'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
      title: "My first Post",
      imageName: "paradise",
      hashtags: ["paradise", "nofilter"],
      createdAt : new Date(),
      updatedAt : new Date(),
      userId: 1,
    },
    {
      title: "Tropical beach",
      imageName: "beach",
      hashtags: ["nofilter", "travel", "love"],
      createdAt : new Date(),
      updatedAt : new Date(),
      userId: 1,
    },
    {
      title: "Somewhere far far away from city",
      imageName: "beach",
      hashtags: ["nofilter", "travel", "sun", "chill"],
      createdAt : new Date(),
      updatedAt : new Date(),
      userId: 2,
    },
    {
      title: "Love this beach",
      imageName: "paradise",
      hashtags: ["paradise", "nofilter", "trip", "faraway"],
      createdAt : new Date(),
      updatedAt : new Date(),
      userId: 3,
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
