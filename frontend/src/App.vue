<script>
import { getTeams } from './api/teams';

export default {
  data() {
    return {
      teams: [], // Lista dei team
    };
  },
  async created() {
    try {
      this.teams = await getTeams(); // Ottieni i dati dal backend
    } catch (error) {
      console.error('Errore durante il caricamento dei team:', error);
    }
  },
};
</script>

<template>
  <div>
    <h1>Lista dei Team</h1>
    <ul>
      <li v-for="team in teams" :key="team._id">{{ team.name }}</li>
    </ul>
  </div>
</template>
