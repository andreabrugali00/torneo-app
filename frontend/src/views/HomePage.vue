<script>
import { getTeams } from '../api/teams';

export default {
  data() {
    return {
      dati: null,
    };
  },
  async created() {
    try {
      this.dati = await getTeams();
    } catch (error) {
      console.error('Errore nel fetch dei dati:', error);
    }
  },
};
</script>

<template>
  <div>
    <h1>Dati ricevuti:</h1>
    <pre>{{ dati }}</pre>
  </div>
</template>
