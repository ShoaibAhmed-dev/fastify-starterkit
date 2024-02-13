import UserController from "../../controllers/v1/user.controller.js";
import UserValidators from "../../validators/users.validators.js";

/**
 * Register your custom plugin here.
 * @param {import("fastify").FastifyInstance} instance Fastify instance
 * @param {*} opt OPtions
 * @param {*} next done callback
 */
const UserRoutes = (instance , options, done) => {

    const controller = new UserController(instance);
    const routes = [
        {
            url: '/users',
            method:'GET',
            schema: {
                description: 'User module',
                tags: ['user'],
                summary: 'get all users',
            },
            handler: controller.index.bind(controller)
        },
        {
            url: '/users',
            method:'POST',
            schema: {
                description: 'User module',
                tags: ['user'],
                body: UserValidators,
                summary: 'Create a new user',
            },
            // attachValidation: true,
            preHandler: instance.auth([instance.authenticate]),
            handler: controller.store.bind(controller)
        },
    ]

    routes.forEach(route => instance.route(route));
    done();
}

export default UserRoutes;