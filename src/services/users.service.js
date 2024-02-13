import UserModel from "../models/user.model.js";

class UserService {
    constructor(instance) {
        this.instance = instance;
    }

    async getAll() {
        let model = new UserModel(this.instance.knex);
        let data = await model.getAll();
        return data;
    }

    async create(user){
        let model = new UserModel(this.instance.knex);
        let data = await model.create({
            name: user.name,
            email: user.email,
            password: await this.instance.bcrypt.hash(user.password) 
        });
        return data;
    }
}

export default UserService;
