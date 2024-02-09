import UserRoutes from "./user.routes.js";

const routes =  ( fastify ,options, done) => {
    fastify.register(UserRoutes);
    done();
}

export default routes;