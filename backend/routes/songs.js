const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/', async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/add', async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.json(song);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add other CRUD routes (POST, PUT, DELETE)...

module.exports = router;
