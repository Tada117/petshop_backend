const express = require('express');
const router = express.Router();

const Brand = require('../models/Brand');

router.post('/', async (req, res) => {
    const { name } = req.body;

    const brand = new Brand({name});

    try {
        const savedBrand = await brand.save();
        res.send(savedBrand);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;