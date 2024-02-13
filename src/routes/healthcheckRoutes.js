const healthcheckRoutes = async (fastify) => {
  fastify.post("/", {
    handler: async () => ({ status: "OK", message: "healthy" }),
  });
  fastify.get("/", {
    handler: async () => ({ status: "OK", message: "healthy" }),
  });
};

module.exports = healthcheckRoutes;
