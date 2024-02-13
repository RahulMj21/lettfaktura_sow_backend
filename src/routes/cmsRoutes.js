const { profile } = require("../controllers/userController");

const userRoutes = async (fastify) => {
  fastify.get("/config", { handler: profile });
};

module.exports = userRoutes;
