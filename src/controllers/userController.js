exports.register = async (_request, reply) => {
  try {
    return reply
      .code(201)
      .serialize({ status: "OK", message: "registered successfully" });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.login = async (_request, reply) => {
  try {
    return reply
      .code(200)
      .serialize({ status: "OK", message: "login successfully" });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.profile = async (_request, reply) => {
  try {
    return reply.code(200).serialize({ status: "OK" });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};
