// routes/matches.js
const express = require('express');
const router = express.Router();
const Match = require('../models/Match');

// Crea una nuova partita
router.post('/', async (req, res) => {
    try {
        const match = new Match(req.body);
        await match.save();
        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ottieni tutte le partite
router.get('/', async (req, res) => {
    try {
        const matches = await Match.find().populate('teamA teamB', 'name');
        res.json(matches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
