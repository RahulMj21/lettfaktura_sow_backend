const { Sequelize } = require("sequelize");

// Initializing Sequelize
const sequelize = new Sequelize(
  "postgres://user:pass@example.com:5432/lettfaktura",
);

// ConnectDB function will try to test the connection
const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected...");
  } catch (error) {}
};

module.exports = { sequelize, initDB };
