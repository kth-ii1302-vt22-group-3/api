const { Sequelize } = require('sequelize');

const URI = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';
const sequelize = new Sequelize(URI);

module.exports = sequelize;