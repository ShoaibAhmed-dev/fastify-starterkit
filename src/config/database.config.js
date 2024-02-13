import fastifyKnexjs from "fastify-knexjs";
import fastifyPlugin from "fastify-plugin";

const database = (instance, options, next) => {

    try {

        const knexConfig = {
            client: process.env.DB_CLIENT,
            connection: {
              host: process.env.DB_HOST,
              port: process.env.DB_PORT,
              user: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_NAME,
              ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
            },
          };
          instance.register(fastifyKnexjs, knexConfig)
          next();
        
    } catch (error) {
        next(error);
    }
 
};

export default fastifyPlugin( database);
