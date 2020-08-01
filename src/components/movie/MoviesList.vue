<template>
  <section class="container movies">
    <h1>Movies</h1>
    <div class="movies-list row">
      <div class="movies-item col-4" v-for="(movie, index) in allMovies" :key="index">
        <div class="movies-item--content">
          <h2>{{movie.title}}</h2>
          <span>{{movie.opening_crawl}}</span>
          <button class="btn btn-light" @click="showMovieInfo(index)">Read more</button>
        </div>
      </div>
    </div>
  </section>
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
    showMovieInfo(index) {
      this.$router.push({
        name: 'MovieItem',
        params: {
          id: index + 1,
        },
      });
    },
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
      display: grid;
      text-align: center;
      background: #11447b;
      border-radius: 8px;
      color: #ffffff;
      padding: 16px;

      span {
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
