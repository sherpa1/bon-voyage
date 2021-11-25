const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

const schema = require('../models/user');

const Knex = require('../knex');

const TABLE = 'users';

const saltRounds = 10;

async function create(data) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(data.password, salt);
    const user = {
        uuid: uuid(),
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: hash,
        gender: data.gender,
        role: data.role,
    };

    if (schema.validate(user)) {
        try {
            await Knex(TABLE).insert(user);
            return user;
        } catch (error) {
            throw error.code;
        }
    }
}

async function read(uuid) {

    try {

        if (!uuid) {//read all
            const items = await Knex(TABLE).select('*');
            return items;
        } else {//read one
            const item = await Knex(TABLE).select('*').where('uuid', uuid).first();
            return item;
        }

    } catch (error) {
        throw error;
    }
}

async function update(uuid, data) {

    let item;

    try {
        item = await read(uuid);

        if (data.password) {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(data.password, salt);
            item.password = hash;
        }

    } catch (error) {
        const err = new Error();
        err.status = 404;
        throw err;
    }

    if (schema.validate(data)) {

        try {
            await Knex(TABLE).update(data).where('uuid', uuid);
        } catch (error) {
            throw error;
        }

        try {
            const item = await read(uuid);
            return item;
        } catch (error) {
            throw error;
        }

    }

}

async function patch(uuid, data) {

    let item;

    try {
        item = await read(uuid);
    } catch (error) {
        const err = new Error();
        err.status = 404;
        throw err;
    }

    if (!item) {
        throw new Error();
    } else {
        item.firstname = data.firstname ?? item.firstname;
        item.lastname = data.lastname ?? item.lastname;
        item.email = data.email ?? item.email;
        item.gender = data.gender ?? item.gender;
        item.role = data.role ?? item.role;
    }

    try {
        await update(uuid, item);
    } catch (error) {

    }
}


async function del(uuid) {

    let item;

    try {
        item = await read(uuid);
    } catch (error) {
        const err = new Error();
        err.status = 404;
        throw err;
    }

    try {
        const result = await Knex(TABLE).where('uuid', uuid).del();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { create, read, update, patch, del };