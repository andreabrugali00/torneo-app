
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestPage: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/teams'); // Cambia con il tuo endpoint API
        console.log("react")
        console.log(response)
        setData(response.data.message); // Supponendo che il backend restituisca un oggetto con un campo `message`
        setError(null);
      } catch (err) {
        setError('Errore durante il recupero dei dati');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test API</h1>
      {loading && <p>Caricamento in corso...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && <p>Risposta dal server: {data}</p>}
    </div>
  );
};

export default TestPage;
