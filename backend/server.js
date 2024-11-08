const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Connessione a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connesso a MongoDB'))
    .catch((error) => console.error('Errore di connessione a MongoDB:', error));

// Collegamento delle rotte
app.use('/teams', require('./routes/teams'));
app.use('/matches', require('./routes/matches'));
app.use('/tournaments', require('./routes/tournaments'));

// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));
