const Joi = require('joi');

const schema = Joi.object({
    uuid: Joi.string().guid({
        version: [
            'uuidv4',
        ]
    }).required(),
    firstname: Joi.string().min(2).max(32).required(),
    lastname: Joi.string().min(2).max(32).required(),
    email: Joi.string().email(),
    password: Joi.string().min(6).max(60).required(),
    gender: Joi.number().min(1).max(2).required(),
    role: Joi.number().min(1).max(2).required(),
});

module.exports = schema;