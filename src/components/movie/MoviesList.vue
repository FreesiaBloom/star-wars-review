<template>
  <v-container class="movies">
    <h1>Movies</h1>
    <div class="row">
      <v-layout row wrap v-if="allMovies">
        <v-flex v-for="(movie, index) in allMovies" :key="index" xs12 sm6>
          <MovieItem :title="movie.title" :crawl="movie.opening_crawl" :index="index"/>
        </v-flex>
      </v-layout>
      <div v-if="!allMovies" class="d-block p-3">
        <p>Oh no, there are no movies! Something went wrong with API!</p>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import MovieItem from './MovieItem.vue';

export default {
  name: 'MoviesList',
  components: {
    MovieItem,
  },
  computed: {
    ...mapGetters(['allMovies']),
  },
  methods: {
    ...mapActions(['getAllMovies']),
  },
  created() {
    this.getAllMovies();
  },
};
</script>
