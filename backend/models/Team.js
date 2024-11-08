const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String },
    players: [{ type: String }] // Elenco dei nomi dei giocatori
});

module.exports = mongoose.model('Team', teamSchema);
