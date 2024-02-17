exports.create = async (_request, reply) => {
  try {
    return reply
      .code(201)
      .serialize({ status: "OK", message: "product added successfully" });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.getAll = async (_request, reply) => {
  try {
    return reply.code(200).serialize({ status: "OK" });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};
