import * as Joi from "joi"

module.exports = {

    body: {
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
    }
};
