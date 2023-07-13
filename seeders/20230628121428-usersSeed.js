'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
    * Add seed commands here.
    *
    * Example:
    * await queryInterface.bulkInsert('People', [{
    *   name: 'John Doe',
    *   isBetaMember: false
    * }], {});
    */
    
    await queryInterface.bulkInsert('Users', [
      {
      first_name: "billy",
      last_name: "Doe",
      description: "I am a new user to this application",
      profilImage: "billy",
      pseudo: "Billy.D",
      password: "123456",
      email: "b.doe@gmail.com",
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      first_name: "amy",
      last_name: "lang",
      description: "Influencor, traveler ♥️",
      profilImage: "amy",
      pseudo: "AmY",
      password: "123456",
      email: "amy_traveler@gmail.com",
      createdAt : new Date(),
      updatedAt : new Date(),
    }, 
    {
      first_name: "sam",
      last_name: "Dupond",
      description: "J'adore voyager et partager mes découvertes",
      profilImage: "sam",
      pseudo: "Sam_trip",
      password: "123456",
      email: "sam.dupond@gmail.com",
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
    
    queryInterface.bulkDelete('Users', null, {});
  }
};
