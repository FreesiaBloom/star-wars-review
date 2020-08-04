<template>
  <v-app :dark="dark" class="dark">
    <TopNavigation></TopNavigation>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TopNavigation from './components/TopNavigation.vue';

export default {
  name: 'app',
  components: {
    TopNavigation,
  },
  data: () => ({
    dark: true,
  }),
};
</script>
<style lang="scss">

</style>
