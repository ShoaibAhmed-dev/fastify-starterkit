import fastifyPlugin from 'fastify-plugin';

 const responsePlugin = (fastify, options, next) => {
  fastify.decorateReply("success", function (data, message = "", statusCode = 200) {
    return this.status(statusCode).send({
      success: true,
      data: data,
      message: message,
      errors: [],
    });
  });

  fastify.decorateReply("error", function (data, message = "", statusCode = 500) {
    return this.status(statusCode).send({
      success: false,
      data:[],
      message: message,
      errors: data,
    });
  });

  next();
}

export default fastifyPlugin(responsePlugin);