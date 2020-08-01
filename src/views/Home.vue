<template>
  <section class="home container">
    <h1>Home</h1>
    <div class="row">
      <div class="col-md-6">
        <router-link to="/movies-list">Movie list</router-link>
      </div>
      <div class="col-md-6">
        <router-link to="/reviews-list">Review list</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>
