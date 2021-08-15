const { Sequelize, DataTypes } = require('sequelize');

const POSTGRES_URI = (process.env.DATABASE_URL);

let sequelize = new Sequelize(POSTGRES_URI);

const Users = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  module.exports = Users