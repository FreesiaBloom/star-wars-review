<template>
  <v-card flat dark class="item mx-2 mb-4">
    <v-card-title class="headline">{{ title }}</v-card-title>

    <v-card-text class="">
        <p class="item-crawl m0 p0">
            {{ crawl }}
        </p>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        :to="{ name: 'MovieDetails', params: {id: index } }">
            Read more
    </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'MovieItem',
  props: {
    index: [String, Number],
    title: String,
    crawl: String,
  },
};
</script>
<style lang="scss" scoped>
.item {
    &-crawl {
        display: block; /* Fallback for non-webkit */
        display: -webkit-box;
        max-width: 600px;
        height: 40px; /* Fallback for non-webkit */
        margin: 0 auto;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
