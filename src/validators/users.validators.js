const UserValidators = {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
        name: {
            properties: {
                value: {
                    type: "string",
                }
            }
        },
        email: {
            properties: {
                value:{
                    type: "string",
                }
            }
        },
        password: {
            properties: {
                value:{
                    type: "string",
                }
            }
        },
        image: { isFile: true }
    },
    additionalProperties: false,
    
}

export default UserValidators;