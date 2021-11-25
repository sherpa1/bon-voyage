const express = require('express');
const router = express.Router();

const places_controller = require('../controllers/places_controller');

router.get('/', async (req, res, next) => {
    const items = await places_controller.read();
    res.status(200).json(items);
});

module.exports = router;