import UserModel from "../models/user.model.js";

class AuthService {
    /**
     * 
     * @param {import("fastify").FastifyInstance} instance 
     */
    constructor(instance) {
        this.instance = instance;
    }


    async authenticate(user){
        let model = new UserModel(this.instance.knex);
        let data = await model.getByEmail(user.email);
        if(data){
            if(await this.instance.bcrypt.compare(user.password,data.password)) {
                const token = this.instance.jwt.sign({ payload:data })
                return {
                    token: token,
                    user: data
                }
            };
        }
        return false;
    }
}

export default AuthService;
