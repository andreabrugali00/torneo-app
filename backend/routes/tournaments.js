// routes/tournaments.js
const express = require('express');
const router = express.Router();
const Tournament = require('../models/Tournament');

// Crea un nuovo torneo
router.post('/', async (req, res) => {
    try {
        const tournament = new Tournament(req.body);
        await tournament.save();
        res.status(201).json(tournament);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ottieni tutti i tornei
router.get('/', async (req, res) => {
    try {
        const tournaments = await Tournament.find().populate('teams matches');
        res.json(tournaments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
