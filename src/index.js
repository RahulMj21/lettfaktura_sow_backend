const { buildServer } = require("./server");
// const { initDB } = require("./database/initDB");

// running the server
const main = async () => {
  const fastify = buildServer();
  // testing the database connection
  // initDB();

  try {
    // it will run the server on http://0.0.0.0:8000
    await fastify.listen({ port: 8000, host: "0.0.0.0" });
  } catch (error) {
    // if anything went wrong we are just logging the error and terminating the process
    fastify.log.error(error);
    process.exit(1);
  }
};

main();
