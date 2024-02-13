const { register, login, profile } = require("../controllers/userController");

const userRoutes = async (fastify) => {
  fastify.post("/register", { handler: register });
  fastify.post("/login", { handler: login });
  fastify.get("/profile", { handler: profile });
};

module.exports = userRoutes;
