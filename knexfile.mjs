import dotenv from "dotenv";
dotenv.config();

// knexfile.js
const knex = {
  development: {
    client: "pg", // Change this according to your database client
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: "./src/database/migrations",
      extension: "mjs",
      loadExtensions: [".mjs"],
    },
    seeds: {
      directory: "./src/database/seeds",
      extension: "mjs",
      loadExtensions: [".mjs"],
    },
  },
};


export default knex;
