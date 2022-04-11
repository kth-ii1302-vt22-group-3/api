const { Sequelize } = require("sequelize");

const URI =
  process.env.DATABASE_URL ||
  "postgres://postgres:postgres@localhost:5432/ii1302";
    
if (process.env.DATABSE_URL) {
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
} else {
  sequelize = new Sequelize(URI, {
    logging: false,
    dialect: "postgres",
  });
}

module.exports = sequelize;
