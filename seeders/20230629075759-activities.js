'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Activities', [
      {
      category: "culture",
      name: "Eiffel Tower",
      imageName: "eiffel_tower",
      link:"https://www.toureiffel.paris/fr",
      price: "",
      latitude: 48.858605,
      longitude: 2.2946,
      description: "Most famous monument",
      rating: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
      destinationId: 1
    }, 
    {
      category: "culture",
      name: "Champs-Elysees",
      imageName: "champs_elysees",
      link:"https://www.google.com/maps/place/Av.+des+Champs-%C3%89lys%C3%A9es,+75008+Paris/@48.8729602,2.2978526,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fc4f8007851:0x5aa1a787f38f64f6!8m2!3d48.8729602!4d2.2978526!16zL20vMGpkNGo?entry=ttu",
      price: "",
      latitude: 48.866867,
      longitude: 2.311780,
      description: "Beautifull famous avenue in Paris",
      rating: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
      destinationId: 1
    }, 
    {
      category: "culture",
      name: "Louvre Museum",
      imageName: "art2",
      link:"https://www.louvre.fr/",
      price: "",
      latitude: 48.860288,
      longitude: 2.337789,
      description: "Big museum in the center of the city where you can see \"La Joconde\"",
      rating: 5,
      createdAt : new Date(),
      updatedAt : new Date(),
      destinationId: 1
    },
    {
      category: "restaurant",
      name: "Big Mamma",
      imageName: "bigmamma",
      link:"https://www.bigmammagroup.com/fr/accueil",
      price: "€€",
      latitude: 48.882056,
      longitude: 2.334163,
      description: "Big Mamma restaurants are laid-back trattoria serving the most authentic Italian food. We buy all our products in Italy. We cook 100% home made. With love.",
      rating: 4,
      createdAt : new Date(),
      updatedAt : new Date(),
      destinationId: 1
    }, 
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
