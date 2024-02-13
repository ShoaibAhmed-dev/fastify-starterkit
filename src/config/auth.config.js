import fastifyAuth from "@fastify/auth";
import fastifyPlugin from "fastify-plugin";
/**
 * Register your custom plugin here.
 * @param {import("fastify").FastifyInstance} instance Fastify instance
 * @param {*} opt OPtions
 * @param {*} next done callback
 */
const authConfig = (instance, options, next) => {

    instance.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.error(null,"You are not authorized to access this endpoint");
        }
    })
    .register(fastifyAuth)

    next();
};

export default fastifyPlugin(authConfig);
