import fastifyEnv from "@fastify/env";
import env_variables from "../constants/env_variables.js";

const env = (instance, opt, done) => {
  const options = {
    dotenv: true, // will read .env in root folder
    data: process.env,
    schema: {
      type: "object",
      required: env_variables,
      properties: {
        PORT: {
          type: "number",
          default: 3000,
        },
      },
    },
  };

  instance.register(fastifyEnv, options).ready((err) => {
    if (err) console.error(err);
  });

  done();
};

export default  env;
