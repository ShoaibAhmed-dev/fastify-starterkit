import responsePlugin from "./response.plugin.mjs";
import fastifyBcrypt from "fastify-bcrypt";
import fastifyPlugin from "fastify-plugin";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyJwt  from "@fastify/jwt";
/**
 * Register your custom plugin here.
 * @param {import("fastify").FastifyInstance} instance Fastify instance
 * @param {*} opt OPtions
 * @param {*} next done callback
 */
const AppPlugin = (instance, opt, next) => {
    // Response Plugin
    instance.register(responsePlugin);

    //Bcrypt Plugin
    instance.register(fastifyBcrypt, {
        saltWorkFactor: 12,
    });

    // Swagger Plugin
    instance.register(fastifySwagger);
    instance.register(fastifySwaggerUI, {
        routePrefix: "/documentation",
        uiConfig: {
            docExpansion: "full",
            deepLinking: false,
        },
        uiHooks: {
            onRequest: function (request, reply, next) {
                next();
            },
            preHandler: function (request, reply, next) {
                next();
            },
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => {
            return swaggerObject;
        },
        transformSpecificationClone: true,
    });

    // JWT plugin
    instance.register(fastifyJwt, {
        secret: "myFirstFastifyProject",
    });

    next();
};

export default fastifyPlugin(AppPlugin);
