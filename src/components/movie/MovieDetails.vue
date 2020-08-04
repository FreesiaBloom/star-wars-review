<template>
  <v-container class="container item" v-if="getMovie">
    <v-row class="d-block mb-9">
      <h1>{{getMovie.title}}</h1>
      <h2 class="subtitle-1">Episode: {{getMovie.episode_id}}</h2>
    </v-row>
    <v-layout row class="mb-5">
        <v-flex xs12 sm12 md4 lg4>
            <p class="yellow--text darken-1 text-center">Director: {{getMovie.director}}</p>
        </v-flex>
        <v-flex  xs12 sm12 md4 lg4>
            <p class="yellow--text darken-1 text-center">Producer: {{getMovie.producer}}</p>
        </v-flex>
        <v-flex  xs12 sm12 md4 lg4>
            <p class="yellow--text darken-1 text-center">Release date: {{getMovie.release_date}}</p>
        </v-flex>
    </v-layout>
    <v-row>
        <p>
            {{getMovie.opening_crawl}}
        </p>
    </v-row>
    <AddReview :index="id" class="mt-9"/>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import AddReview from '../review/AddReview.vue';

export default {
  name: 'MovieDetails',
  components: {
    AddReview,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    getMovie() {
      return this.$store.state.MoviesList.moviesList[this.id];
    },
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
<style lang="scss" scope>
</style>
