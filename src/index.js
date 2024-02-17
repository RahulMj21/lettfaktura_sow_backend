const { buildServer } = require("./server");
const { initDB } = require("./database");
const { PORT } = require("./config");

// running the server
const main = () => {
  const fastify = buildServer();

  // testing the database connection
  initDB();

  try {
    // it will run the server on http://0.0.0.0:8000
    fastify.listen({ port: PORT, host: "0.0.0.0" });
  } catch (error) {
    // logging the error and terminating the process
    fastify.log.error(error);
    process.exit(0);
  }
};

main();
