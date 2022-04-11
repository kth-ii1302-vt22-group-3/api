const { Sequelize } = require('sequelize');

const URI = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/ii1302';
const sequelize = new Sequelize(URI);

module.exports = sequelize;