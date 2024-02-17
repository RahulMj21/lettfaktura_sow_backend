const cmsRoutes = async (fastify) => {
  fastify.get("/config", {
    handler: async () => {
      return { status: "OK" };
    },
  });
};

module.exports = cmsRoutes;
