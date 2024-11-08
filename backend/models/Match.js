const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    teamA: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    teamB: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    scoreA: { type: Number, default: 0 },
    scoreB: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Match', matchSchema);
