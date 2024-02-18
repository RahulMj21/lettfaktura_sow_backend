const { Sequelize, DataTypes } = require("sequelize");
const { DB_URL } = require("../config");

// Initializing Sequelize
const sequelize = new Sequelize(DB_URL, { logging: false });

// ConnectDB function will try to test the connection

// DB Models
const Product = sequelize.define(
  "Product",
  {
    articleNo: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    createdAt: true,
  },
);

const Navlink = sequelize.define("Navlink", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  href: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const SidebarLink = sequelize.define("SidebarLink", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  href: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const TermsText = sequelize.define("TermsText", {
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
});

const initDB = async () => {
  try {
    await sequelize.authenticate().then(async () => {
      await Product.sync({ force: false });
      await Navlink.sync({ force: false });
      await SidebarLink.sync({ force: false });
      await TermsText.sync({ force: false, alter: true });
    });
    console.log("DB Connected...");
  } catch (error) {
    console.log("DB Error :", error);
  }
};

module.exports = {
  sequelize,
  initDB,
  Product,
  Navlink,
  SidebarLink,
  TermsText,
};
