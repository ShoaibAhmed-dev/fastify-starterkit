import { fastify } from "fastify";
import routes from "./routes/v1/routes.js";
import database from "./config/database.js";
import env from "./config/env.js";
import request from "./config/request.js";

const app = fastify({
  logger: {
    level: "debug",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
});

///////////////////////
// ENV configuration //
///////////////////////

app.register(env, {}, (err) => {
  if (err) {
    console.error("Error on Reading ENV", err);
  }
});


////////////////////////////
// Database configuration //
////////////////////////////

app.register(database, {}, (err) => console.error("Knex Error", err));

////////////////////////////
// Instance configuration //
////////////////////////////

app.register(request, {}, (err) => console.error("Request Error", err));

/////////////////////////
// Route configuration //
/////////////////////////

app.get("/", (req, reply) => {
  return "hello world";
});

app.register(routes, { prefix: "api/v1" });

/////////////////////////
// Route configuration //
/////////////////////////

const port = process.env.PORT || 3000;
app.listen({ port: port }, (error, res) => {
  if (!error) {
    app.log.info(`Server listening on ${port}`);
  }
});
