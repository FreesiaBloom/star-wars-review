<template>
  <v-app-bar app color="rgb(0, 0, 0, 0.6)" dark>
    <div class="d-flex align-center">
      <v-toolbar-title>
        <v-btn text>Review App</v-btn>
      </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>
    <v-btn text to="/" class="mr-2">
      <span>Home</span>
    </v-btn>
    <v-btn text to="/movies-list"  class="mr-2">
      <span>Movies</span>
    </v-btn>
    <v-btn text to="/reviews-list"  class="mr-2">
      <span>Reviews</span>
    </v-btn>
    <!-- <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/movies-list">Movies</router-link>
        </li>
    </ul>-->
  </v-app-bar>
</template>
<script>
export default {
  name: 'TopNavigation',
};
</script>
