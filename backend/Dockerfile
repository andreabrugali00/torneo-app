# Usa un'immagine base di Node.js
FROM node:18

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia i file di configurazione
COPY package*.json ./

# Installa le dipendenze    
RUN npm install

# Copia il resto dei file
COPY . .

# Espone la porta su cui l'app ascolterà
EXPOSE 3000

# Comando per avviare l'app
CMD ["npm", "start"]
