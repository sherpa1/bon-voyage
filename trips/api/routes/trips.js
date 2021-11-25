const express = require('express');
const router = express.Router();

const trips_controller = require('../controllers/trips_controller');

router.get('/', async (req, res, next) => {
    const items = await trips_controller.read();
    res.status(200).json(items);
});

module.exports = router;