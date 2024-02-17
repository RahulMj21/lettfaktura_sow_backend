const Fastify = require("fastify");
const productRoutes = require("./routes/productRoutes");
const healthcheckRoutes = require("./routes/healthcheckRoutes");
const cmsRoutes = require("./routes/cmsRoutes");

exports.buildServer = () => {
  // Instanciating fastify
  const fastify = Fastify({ logger: true });

  // registering all the routes
  fastify.register(healthcheckRoutes, { prefix: "/api/v1/healthcheck" });
  fastify.register(productRoutes, { prefix: "/api/v1/product" });
  fastify.register(cmsRoutes, { prefix: "/api/v1/cms" });

  return fastify;
};
