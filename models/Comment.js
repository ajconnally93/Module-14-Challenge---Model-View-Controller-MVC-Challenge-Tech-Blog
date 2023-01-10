const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// 
class Comment extends Model {}

// setting allow Null to true can allow for comment deletion as potential functionality

Comment.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    comment_description: {
        type: DataTypes.STRING,
    },


    // uses key references
    // remember relationships set up in models/index.js
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog',
        key: 'id',
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }

);
module.exports = Comment;