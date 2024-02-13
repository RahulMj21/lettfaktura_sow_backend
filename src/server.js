const Fastify = require("fastify");
const userRoutes = require("./routes/userRoutes");
const healthcheckRoutes = require("./routes/healthcheckRoutes");
const cmsRoutes = require("./routes/cmsRoutes");

exports.buildServer = () => {
  // Instanciating fastify
  const fastify = Fastify({ logger: true });

  // const middleware = (async = (request, reply, done) => {
  //   request.user = { id: "1", name: "some user" };
  //   done();
  // });
  //
  // fastify.get("/", {
  //   preHandler: [middleware],
  //   handler: async (request, reply) => {
  //     return { user: request.user };
  //   },
  // });

  // registering all the routes
  fastify.register(healthcheckRoutes, { prefix: "/api/v1/healthcheck" });
  fastify.register(userRoutes, { prefix: "/api/v1/user" });
  fastify.register(cmsRoutes, { prefix: "/api/v1/cms" });

  return fastify;
};
