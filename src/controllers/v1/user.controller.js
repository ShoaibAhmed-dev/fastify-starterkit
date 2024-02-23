import UserService from "../../services/users.service.js";
import Controller from "./controller.js";
import UserValidators from "../../validators/users.validators.js";

class UserController extends Controller {
    constructor(instance) {
        super(instance);
        this.service = new UserService(this.instance);
    }

    /**
     * Get all users in the current session and return them as a collection of users objects.
     * @param {import("fastify").FastifyRequest} req
     * @param {import("fastify").FastifyReply} reply
     * @returns
     */
    async index(req, reply) {
        let data = await this.service.getAll();
        reply.success(data, "User Fetch Success");
    }

    /**
     * Get all users in the current session and return them as a collection of users objects.
     * @param {import("fastify").FastifyRequest} req
     * @param {import("fastify").FastifyReply} reply
     * @returns
     */
    async store(req, reply) {

        // const validate = req.compileValidationSchema(UserValidators);
        // if (!validate(req.body)) {
        //     const validationErrors = validate.errors;
        //     return reply.error(validationErrors, "Validation Error", 422);
        // }

        let data = await this.service.create(req);
        reply.success(data, "User Created successfully!");
    }
}

export default UserController;
