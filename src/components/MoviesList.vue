<template>
    <div class="container movies">
        <h1>Movies</h1>
        <div class="movies-list row">
          <div
            class="movies-item col-4"
            v-for="movie in allMovies"
            :key="movie.episode_id">
            <div class="movies-item--content">
              <h2>
                {{movie.title}}
              </h2>
              <span>
                {{movie.opening_crawl}}
              </span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MoviesList',
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
<style scoped lang="scss">
.movies {
  &-item {
    margin-bottom: 16px;
    &--content {
      text-align: center;
      background: #11447b;
      border-radius: 8px;
      color: #ffffff;
      padding: 16px;
    }
  }
}
</style>
