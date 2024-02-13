exports.config = async (request, reply) => {
  try {
    return reply.code(200).serialize({ status: "OK", data: {} });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};
