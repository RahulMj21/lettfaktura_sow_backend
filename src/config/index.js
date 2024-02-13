const { config } = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  config({ path: configFile });
} else {
  config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};
