import {index, store} from "../../controllers/v1/user.controller.js";

const UserRoutes = (instance , options, done) => {
    const routes = [
        {
            url: '/users',
            method:'GET',
            handler: index
        },
        {
            url: '/users',
            method:'POST',
            handler: store
        },
    ]

    routes.forEach(route => instance.route(route));
    done();
}

export default UserRoutes;