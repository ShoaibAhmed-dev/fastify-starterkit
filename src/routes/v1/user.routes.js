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
                security: [
                    {
                        "Authorization":[],
                    }
                ],
            },
            preHandler: instance.auth([instance.authenticate]),
            handler: controller.index.bind(controller)
        },
        {
            url: '/users',
            method:'POST',
            schema: {
                summary: 'Create a new user',
                description: 'User module',
                tags: ['user'],
                consumes: ['multipart/form-data'],
                body: UserValidators,
                security: [
                    {
                        "Authorization":[],
                    }
                ]
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