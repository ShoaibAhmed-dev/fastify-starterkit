import { fastify } from "fastify";
import routes from "./routes/v1/routes.js";
import AppPlugin from "./plugins/app.plugin.js";
import ajvErrors from "ajv-errors";
import appConfig from "./config/app.config.js";
import { ajvFilePlugin } from "@fastify/multipart";

// function ajvFilePlugin(ajv) {
//   return ajv.addKeyword({
//     keyword: 'isFile',
//     compile: (_schema, parent) => {
//       parent.type = 'file';
//       delete parent.isFile;
//       return () => true;
//     },
//   });
// }

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
  ajv: {
    customOptions: {
      removeAdditional: true,
      additionalProperties: false,
      // Warning: Enabling this option may lead to this security issue https://www.cvedetails.com/cve/CVE-2020-8192/
      allErrors: true
    },
    plugins: [
      ajvErrors,
      ajvFilePlugin
    ]
    // plugins: [[require('ajv-formats'), { mode: 'fast' }]]
  }
});


///////////////////////
// App configuration //
///////////////////////

app.register(appConfig, {}, (err) => console.error("Configuration Error", err));


////////////////////////////
// Plugins Registrations  //
////////////////////////////

app.register(AppPlugin, {}, (err) => console.error("Plugin registration", err));

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
