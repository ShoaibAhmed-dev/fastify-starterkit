import fastifyPlugin from "fastify-plugin";
import databaseConfig from "./database.config.js";
import env from "./env.config.js";
import authConfig from "./auth.config.js";

/**
 * Register your custom plugin here.
 * @param {import("fastify").FastifyInstance} instance Fastify instance
 * @param {*} opt OPtions
 * @param {*} next done callback
 */
const appConfig = (instance, options, next) => {

    // Env configuration
    instance.register(env, {}, (err) => console.log(err));
    // Database configuration
    instance.register(databaseConfig, {}, (err) => console.log(err))
    // Auth configuration
    instance.register(authConfig, {}, (err) => console.log(err))

    next();
};

export default fastifyPlugin(appConfig);
