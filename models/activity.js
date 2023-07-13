'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.Destination, { foreignKey: "destinationId" });
      Activity.hasMany(models.Review, { foreignKey: "activityId" });
    }
  }
  Activity.init({
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    imageName: DataTypes.STRING,
    link: DataTypes.STRING,
    price: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};