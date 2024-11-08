// routes/teams.js
const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Crea un nuovo team
router.post('/', async (req, res) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ottieni tutti i team
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ottieni un singolo team
router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) return res.status(404).json({ error: 'Team non trovato' });
        res.json(team);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Aggiorna un team
router.put('/:id', async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!team) return res.status(404).json({ error: 'Team non trovato' });
        res.json(team);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Elimina un team
router.delete('/:id', async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) return res.status(404).json({ error: 'Team non trovato' });
        res.json({ message: 'Team eliminato' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
