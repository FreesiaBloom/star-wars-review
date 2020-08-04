<template>
    <v-card flat dark class="item mx-2 mb-4" v-if="getMovie">
        <v-card-title class="headline">
            {{ getMovie.title }}
        </v-card-title>
        <v-card-text class="pb-0">
            <div  class="d-block">
                <p>
                    <strong>{{ form.name }}</strong>
                    rated this episode {{ form.rating }} out of 5 stars
                </p>
                <p>
                    {{ form.message }}
                </p>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn
                text
                :to="{ name: 'MovieDetails', params: {id: index } }">
                    See full movie description
            </v-btn>
        </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'ReviewItem',
  props: {
    index: [String, Number],
    form: {
      id: String,
      message: String,
      rating: Number,
    },
  },
  computed: {
    getMovie() {
      return this.$store.state.MoviesList.moviesList[this.index];
    },
  },
  methods: {
    ...mapActions(['getAllMovies']),
  },
  created() {
    this.getAllMovies();
  },
};
</script>
