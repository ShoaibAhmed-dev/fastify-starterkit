import AuthRoutes from "./auth/auth.routes.js";
import UserRoutes from "./user.routes.js";

const routes =  ( fastify ,options, done) => {
    fastify.register(AuthRoutes, { prefix: 'auth'});
    fastify.register(UserRoutes);
    done();
}

export default routes;