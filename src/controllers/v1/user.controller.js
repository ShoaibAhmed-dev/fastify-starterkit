import UserModel from "../../models/user.model.js";

export const index = async ( req, reply ) => {
    
    let model = new UserModel(req.fastify.knex)
    let data = await model.getAll();
    return data;
}

export const store = async (req, reply) => {

    let model = new UserModel(req.fastify.knex)
    let data = await model.create({
        name: "Shoaib Ahmed",
        email: "ShoaibAhmed@gmail.com",
        password: "123123123"
    });
    console.log("🚀 ~ store ~ data:", data)


    return data;
}

const UserController = {
    index
}

export default UserController;
