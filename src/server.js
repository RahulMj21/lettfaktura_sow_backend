const Fastify = require("fastify");
const productRoutes = require("./routes/productRoutes");
const healthcheckRoutes = require("./routes/healthcheckRoutes");
const cmsRoutes = require("./routes/cmsRoutes");
const cors = require("@fastify/cors");
const { WEB_APP_URL } = require("./config");

exports.buildServer = () => {
  // Instanciating fastify
  const fastify = Fastify({ logger: true });

  // handling CORS
  fastify.register(cors, {
    origin: [WEB_APP_URL],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  });

  // registering all the routes
  fastify.register(healthcheckRoutes, { prefix: "/api/v1/healthcheck" });
  fastify.register(productRoutes, { prefix: "/api/v1/product" });
  fastify.register(cmsRoutes, { prefix: "/api/v1/cms" });

  return fastify;
};
