const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Permetti le richieste dal frontend
    methods: 'GET,POST,PUT,DELETE', // Specifica i metodi consentiti
    credentials: true, // Se necessario per le credenziali (cookie, auth headers, ecc.)
}));
app.use(express.json());

// Connessione a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connesso a MongoDB'))
    .catch((error) => console.error('Errore di connessione a MongoDB:', error));

// Collegamento delle rotte
app.use('/teams', require('./routes/teams'));
app.use('/matches', require('./routes/matches'));
app.use('/tournaments', require('./routes/tournaments'));

//app.use(cors());


// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));
