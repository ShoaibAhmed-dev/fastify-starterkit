import UserModel from "../models/user.model.js";
import { saveFile } from "../utils/utils.js";

class UserService {
    constructor(instance) {
        this.instance = instance;
    }

    async getAll() {
        let model = new UserModel(this.instance.knex);
        let data = await model.getAll();
        return data;
    }

    /**
     * Get all users in the current session and return them as a collection of users objects.
     * @param {import("fastify").FastifyRequest} req
     * @returns
     */
    async create(req){

        let model = new UserModel(this.instance.knex);
        const file = await req.body.image;
        console.log("🚀 ~ UserService ~ create ~ file:", file)

        const result = await saveFile(file, model.filePath);


        // let data = await model.create({
        //     name: user.name,
        //     email: user.email,
        //     password: await this.instance.bcrypt.hash(user.password) 
        // });
        // return data;
        // return result;
        return true;
    }
}

export default UserService;
