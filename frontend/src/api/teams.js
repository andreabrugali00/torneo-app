import apiClient from './index';

// Esempio di una chiamata per ottenere dati
export const getTeams = async () => {
  try {
    const response = await apiClient.get('/teams'); // Modifica con il tuo endpoint
    return response.data;
  } catch (error) {
    console.error('Errore durante il fetch dei dati:', error);
    throw error;
  }
};
