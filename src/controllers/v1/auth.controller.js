import AuthService from "../../services/auth.service.js";
import Controller from "./controller.js";

class AuthController extends Controller {
    constructor(instance) {
        super(instance);
        this.service = new AuthService(this.instance);
    }

    /**
     * Get all users in the current session and return them as a collection of users objects.
     * @param {import("fastify").FastifyRequest} req
     * @param {import("fastify").FastifyReply} reply
     * @returns
     */
    async login(req, reply) {

        let data = await this.service.authenticate(req.body);
        if(data){
            reply.success(data, "Logged in successfully");
        }
        else{
            reply.error(null, "Invalid Credentials", 401);
        }
    }
}

export default AuthController;
