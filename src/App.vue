<template>
  <div id="app">
    <TopNavigation></TopNavigation>
    <router-view/>
  </div>
</template>
<script>
import TopNavigation from './components/TopNavigation.vue';

export default {
  name: 'app',
  components: {
    TopNavigation,
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
