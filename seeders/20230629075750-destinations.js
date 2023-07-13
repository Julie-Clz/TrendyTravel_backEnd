'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Destinations', [
      {
      country: "france",
      city: "paris",
      imageName: "eiffel_tower",
      latitude: 48.859565,
      longitude:  2.353235,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      country: "Japan",
      city: "Tokyo",
      imageName: "japan",
      latitude: 35.67988,
      longitude: 139.7695,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      country: "USA",
      city: "New York",
      imageName: "new_york",
      latitude: 40.71592,
      longitude: -74.0055,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      country: "Mexique",
      city: "Mexico city",
      imageName: "http://res.cloudinary.com/dvo3xgwym/image/upload/v1689198086/c5edlmpgxya1wpdisnsg.avif",
      latitude: 19.432608,
      longitude:  -99.133209,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      country: "Allemagne",
      city: "Berlin",
      imageName: "http://res.cloudinary.com/dvo3xgwym/image/upload/v1689198036/qq7rvn29c7h4pioeykhb.avif",
      latitude: 52.520007,
      longitude: 13.404954,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      country: "Espagne",
      city: "Barcelone",
      imageName: "http://res.cloudinary.com/dvo3xgwym/image/upload/v1689198003/astc6p0hrxbbtsgcs8jd.avif",
      latitude: 41.3850639,
      longitude: 2.1734035,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      country: "France",
      city: "Annecy",
      imageName: "http://res.cloudinary.com/dvo3xgwym/image/upload/v1689197969/x0fawo4dd1p8nwtnnz81.avif",
      latitude: 45.899247,
      longitude: 6.129384,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      country: "Portugal",
      city: "Lisbonne",
      imageName: "http://res.cloudinary.com/dvo3xgwym/image/upload/v1689198062/fzxjrilz0lbbxqzbmjzv.avif",
      latitude: 38.7167,
      longitude: -9.1333,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      country: "Portugal",
      city: "Porto",
      imageName: "http://res.cloudinary.com/dvo3xgwym/image/upload/v1689198116/uwyoo409le9jzu1jczoo.avif",
      latitude: 41.1579438,
      longitude: -8.6291053,
      createdAt : new Date(),
      updatedAt : new Date(),
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
