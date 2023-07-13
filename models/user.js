'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: "userId" });
      User.hasMany(models.Review, { foreignKey: "userId" });
      User.hasMany(models.Follower, { foreignKey: "followerId" });
      User.hasMany(models.Follower, { foreignKey: "followedId" });
      User.hasMany(models.Like, { foreignKey: "userId" });
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    profilImage: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};