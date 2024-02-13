const { DataTypes } = require("sequelize");
const { sequelize } = require("../initDB");

// defining the structure of the user table
exports.User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    // other attributes will go here
    createdAt: true,
    updatedAt: true,
  },
);
