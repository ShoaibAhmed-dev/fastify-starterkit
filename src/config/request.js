import fastifyPlugin from "fastify-plugin";

const request = (instance, options, next) => {
  try {
    instance
      .decorateRequest("fastify", null)
      .addHook("onRequest", async (req, reply) => {
        req.fastify = instance;
      });

    next();
  } catch (error) {
    next(error);
  }
};

export default fastifyPlugin(request);
