const { DataTypes } = require("sequelize");
const { sequelize } = require("../initDB");

// defining the structure of the product table
exports.Product = sequelize.define(
  "Product",
  {
    // Model attributes are defined here
    articleNo: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inPrice: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inStock: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    // other attributes will go here
    createdAt: true,
  },
);
