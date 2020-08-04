<template>
  <v-container class="reviews">
    <h1>Reviews</h1>
    <div class="row">
      <v-layout row wrap v-if="allReviews">
        <v-flex v-for="(review, index) in allReviews" :key="index" xs12 sm6>
          <ReviewItem :index="review.index" :form="review.form"/>
        </v-flex>
      </v-layout>
      <div v-if="!allReviews" class="d-block p-3">
        <p>Oh no, there are no reviews!</p>
        <v-btn to="movies-list">Please select a movie and add a review!</v-btn>
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ReviewItem from './ReviewItem.vue';

export default {
  name: 'ReviewsList',
  components: {
    ReviewItem,
  },
  computed: {
    ...mapGetters(['allReviews']),
  },
  methods: {
    ...mapActions(['getAllReviews']),
  },
  created() {
    this.getAllReviews();
  },
};
</script>
