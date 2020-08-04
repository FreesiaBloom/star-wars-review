<template>
  <v-container class="my-9">
    <v-row class="my-9">
      <v-row align="center" justify="center">
        <v-img
          src="../assets/images/start_wars_logo.png"
          max-width="500px"
        >
        </v-img>
      </v-row>
    </v-row>
    <v-row  align="center" justify="center" class="mt-9">
      <h1 class="text-center my-3">
        Movies review app
      </h1>
      <h2 class="text-center my-3">
        Look through movie list and leave your thoughts for each episode
      </h2>
    </v-row>
    <v-row class="mt-9">
      <v-layout row wrap>
        <v-flex xs12 sm6 class="btn-dashboard mb-3">
          <v-btn to="movies-list">Movies list</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="btn-dashboard mb-3">
          <v-btn to="reviews-list" >Reviews list</v-btn>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style lang="scss">
  .btn-dashboard {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      width: 90%;
      height: 80px !important;
    }
  }
</style>
