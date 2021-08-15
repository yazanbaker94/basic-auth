'use strict';

require('dotenv').config();
const POSTGRES_URI = process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(POSTGRES_URI);



module.exports = {
  db: sequelize
}
