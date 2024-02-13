import AuthController from "../../../controllers/v1/auth.controller.js";
import AuthValidators from "../../../validators/auth.validators.js";

/**
 * Register your custom plugin here.
 * @param {import("fastify").FastifyInstance} instance Fastify instance
 * @param {*} opt OPtions
 * @param {*} next done callback
 */
const AuthRoutes = (instance , options, done) => {


    const controller = new AuthController(instance);
    const routes = [
        {
            url: '/login',
            method:'POST',
            schema: {
                description: 'Login user',
                tags: ['Auth'],
                body: AuthValidators,
                summary: 'Authenticate user',
            },
            // attachValidation: true,
            handler: controller.login.bind(controller)
        },
    ]

    routes.forEach(route => instance.route(route));
    done();
}

export default AuthRoutes;