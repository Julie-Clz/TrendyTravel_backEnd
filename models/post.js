'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: "userId" });
      Post.hasMany(models.Like, { foreignKey: "postId" });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    imageName: DataTypes.STRING,
    hashtags: DataTypes.ARRAY(DataTypes.STRING),
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};