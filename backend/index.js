const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per il parsing del JSON
app.use(express.json());

// Route di esempio
app.get('/', (req, res) => {
  res.send('Benvenuto nel backend del torneo!');
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:8081', // URL del frontend
  credentials: true,
}));
