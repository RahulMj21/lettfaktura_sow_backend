const { config } = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  config({ path: configFile });
} else {
  config();
}

module.exports = {
  PORT: process.env.PORT || 8000,
  DB_URL: process.env.DB_URL,
  WEB_APP_URL: process.env.WEB_APP_URL,
};
