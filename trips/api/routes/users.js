const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users_controller');

router.put('/:uuid', async (req, res, next) => {

    try {
        const item = await users_controller.update(req.params.uuid, req.body);

        if (!item) {
            res.sendStatus(500);
        } else {
            item.password = "*****";//hide password

            res.status(200).json(item);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

});

router.patch('/:uuid', async (req, res, next) => {

    try {
        const item = await users_controller.update(req.params.uuid, req.body);

        if (!item) {
            res.sendStatus(500);
        } else {
            item.password = "*****";//hide password

            res.status(200).json(item);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

});

router.get('/:uuid', async (req, res, next) => {
    const item = await users_controller.read(req.params.uuid);

    if (!item) {
        res.sendStatus(404);
    } else {
        item.password = "*****";//hide password

        res.status(200).json(item);
    }
});

router.get('/', async (req, res, next) => {
    const items = await users_controller.read();

    if (!items) {
        res.sendStatus(404);
    } else {
        for (const item of items) {
            item.password = "*****";//hide password
        }

        res.status(200).json(items);
    }

});


router.post('/', async (req, res, next) => {
    try {
        const item = await users_controller.create(req.body);
        item.password = "*****";//hide password
        res.status(201).json(item);
    } catch (error) {
        if (error === 'ER_DUP_ENTRY') {
            next(409);
        } else {
            next(500);
        }
    }
});

router.delete('/:uuid', async (req, res, next) => {
    try {
        await users_controller.del(req.params.uuid);
        res.sendStatus(200);
    } catch (error) {
        next(500);
    }
});

module.exports = router;