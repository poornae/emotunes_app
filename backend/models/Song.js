const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Song = sequelize.define('song', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emotion: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Song;
