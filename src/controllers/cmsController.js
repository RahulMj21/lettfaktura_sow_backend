const { Navlink, SidebarLink, TermsText } = require("../database");

exports.config = async (_request, reply) => {
  try {
    const links = await Navlink.findAll({ order: [["id", "ASC"]] });

    const data = { links };

    return reply.code(200).serialize({ status: "OK", data });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.sidebarLinks = async (_request, reply) => {
  try {
    const links = await SidebarLink.findAll({ order: [["id", "ASC"]] });

    return reply.code(200).serialize({ status: "OK", data: links });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.terms = async (_request, reply) => {
  try {
    const texts = await TermsText.findAll({ order: [["id", "ASC"]] });
    const data = {
      texts,
      terms: "Terms",
      buttonText: "Close and Go Back",
    };

    return reply.code(200).serialize({ status: "OK", data });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.createNavLink = async (request, reply) => {
  try {
    const payload = request.body;
    const linkRes = await Navlink.create(payload);

    return reply.code(201).serialize({ status: "OK", data: linkRes.toJSON() });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.createSidebarLink = async (request, reply) => {
  try {
    const payload = request.body;
    const linkRes = await SidebarLink.create(payload);

    return reply.code(201).serialize({ status: "OK", data: linkRes.toJSON() });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.updateSidebarLink = async (request, reply) => {
  try {
    const id = request.params.id;
    const payload = request.body;
    await SidebarLink.update(payload, { where: { id } });

    return reply.code(200).serialize({ status: "OK", data: payload });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};

exports.createTermsText = async (request, reply) => {
  try {
    const payload = request.body;
    const termRes = await TermsText.create(payload);

    return reply.code(201).serialize({ status: "OK", data: termRes.toJSON() });
  } catch (error) {
    return reply
      .code(500)
      .serialize({ status: "ERROR", message: "internal server error" });
  }
};
