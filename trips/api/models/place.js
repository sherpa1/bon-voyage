const Joi = require('joi');

const schema = Joi.object({
    uuid: Joi.uuid({ version: ['uuidv4'] }).required(),
    name: Joi.string().min(2).max(32).required(),
    latitude: Joi.latitude().required(),
    longitude: Joi.longitude().required(),
    position: Joi.number().default(0).required(),
    done: Joi.number().default(0).min(0).max(1).required(),
});

module.exports = schema;