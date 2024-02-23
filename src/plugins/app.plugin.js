import responsePlugin from "./response.plugin.mjs";
import fastifyBcrypt from "fastify-bcrypt";
import fastifyPlugin from "fastify-plugin";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyJwt from "@fastify/jwt";
import fastifyMultipart from "@fastify/multipart";
import fastifyFormbody from "@fastify/formbody";
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
    instance.register(fastifySwagger, {
        swagger: {
            info: {
                title: "Bidding API Documentation",
                description:
                    "Bidding API Documentation for Swagger Documentation",
            },
            securityDefinitions: {
                Authorization: {
                    type: "apiKey",
                    scheme: "bearer",
                    name: "Authorization",
                    in: "header",
                },
            },
        },
    });

    // SwaggerUI Plugin
    instance.register(fastifySwaggerUI, {
        routePrefix: "/documentation",
        uiConfig: {
            docExpansion: "list",
            deepLinking: true,
            persistAuthorization: true,
        },
        uiHooks: {
            onRequest: function (request, reply, next) {
                next();
            },
            preHandler: function (request, reply, next) {
                next();
            },
        },
        transformStaticCSP: (header) => header,
        staticCSP: false,
        exposeRoute: true,
    });

    // JWT plugin
    instance.register(fastifyJwt, {
        secret: "myFirstFastifyProject",
    });

    // Multipart plugin
    instance.register(fastifyMultipart, {
        attachFieldsToBody: true,
        // attachFieldsToBody: 'keyValues',
        // async onFile(part) {
        //     const buffer = await part.toBuffer();
        //     part.value = {
        //         type: part.type,
        //         fieldname: part.fieldname,
        //         filename: part.filename,
        //         encoding: part.encoding,
        //         mimetype: part.mimetype,
        //         buffer,
        //         size: buffer.length,
        //     };
        // },
    });

    // Form Body plugin
    instance.register(fastifyFormbody);

    next();
};

export default fastifyPlugin(AppPlugin);
