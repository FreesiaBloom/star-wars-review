<template>
  <div class="container item">
    <div class="item-header">
      <h1>{{getMovie.title}}</h1>
      <h2>Episode: {{getMovie.episode_id}}</h2>
    </div>
    <div class="row item-info">
        <div class="col-md-4">
            <p>Director: {{getMovie.director}}</p>
        </div>
        <div class="col-md-4">
            <p>Producer: {{getMovie.producer}}</p>
        </div>
        <div class="col-md-4">
            <p>Release date: {{getMovie.release_date}}</p>
        </div>
    </div>
    <div>
        <span>
            {{getMovie.opening_crawl}}
        </span>
    </div>
    <AddReview />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import AddReview from '../review/AddReview.vue';

export default {
  name: 'MovieItem',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  components: {
    AddReview,
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
    .item {
        &-header, &-info {
            text-align: center;
        }
    }
</style>
