const { Product } = require("../database");

exports.create = async (request, reply) => {
  try {
    const payload = request.body;

    const productRes = await Product.create(payload);
    return reply.code(201).serialize({
      status: "OK",
      message: "product added successfully",
      data: productRes.toJSON(),
    });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.getAll = async (_request, reply) => {
  try {
    const products = await Product.findAll();

    return reply.code(200).serialize({ status: "OK", data: products });
  } catch (error) {
    console.log({ error });
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};
