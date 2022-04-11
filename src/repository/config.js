const { Sequelize } = require("sequelize");

const URI =
  process.env.DATABASE_URL ||
  "postgres://postgres:postgres@localhost:5432/ii1302";

sequelize = new Sequelize(URI, {
  logging: false,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
