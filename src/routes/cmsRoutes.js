const {
  config,
  sidebarLinks,
  terms,
  createNavLink,
  createSidebarLink,
  createTermsText,
  updateSidebarLink,
} = require("../controllers/cmsController");

const cmsRoutes = async (fastify) => {
  fastify.get("/config", { handler: config });
  fastify.get("/sidebar-links", { handler: sidebarLinks });
  fastify.get("/terms", { handler: terms });

  fastify.post("/link", { handler: createNavLink });
  fastify.post("/sidebar-link", { handler: createSidebarLink });
  fastify.post("/terms", { handler: createTermsText });

  fastify.put("/sidebar-link/:id", { handler: updateSidebarLink });
};

module.exports = cmsRoutes;
