const { create, getAll } = require("../controllers/productController");

const productRoutes = async (fastify) => {
  fastify.post("/create", { handler: create });
  fastify.get("/all", { handler: getAll });
};

module.exports = productRoutes;
