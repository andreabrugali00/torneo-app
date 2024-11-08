const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['round_robin', 'elimination'], required: true }, // Tipo di torneo
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }]
});

module.exports = mongoose.model('Tournament', tournamentSchema);
