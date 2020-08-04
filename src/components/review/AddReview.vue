<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4 class="add-review">
          <v-row class="d-block m-3 p-2">
            <h2 class="title text-center">Share your thoughts about this episode!</h2>
            <form>
              <v-text-field
                v-model="form.name"
                :rules="nameRule"
                label="Name"
                counter="20"
                required
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                :rules="messageRule"
                label="Message"
                counter="300"
                required
              ></v-textarea>
              <label for="rating">Rate movie from 0 to 5 stars</label>
              <v-rating
                v-model="form.rating"
                background-color="orange"
                color="orange"
                large>
              </v-rating>
              <v-row class="justify-end mt-3 mr-1">
                <v-btn
                  @click="submit"
                  color="deep-purple lighten-1">
                  Send
                </v-btn>
              </v-row>
            </form>
          </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddReview',
  props: {
    index: [String, Number],
  },
  data() {
    return {
      nameRule: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 3) || 'Name must be atleast 3 characters',
        (v) => (v && v.length <= 20) || 'Name must be less then 20 characters',
      ],
      messageRule: [
        (v) => !!v || 'Message is required',
        (v) => (v && v.length <= 300) || 'Name must be less then 300 characters',
      ],
      form: {
        name: '',
        message: '',
        rating: 0,
      },
    };
  },
  methods: {
    ...mapActions(['submitReview']),
    resetForm() {
      this.form.name = '';
      this.form.message = '';
      this.form.rating = 0;
    },
    submit() {
      const {
        index,
        form,
      } = this;

      const newReview = {
        index,
        form,
      };

      this.submitReview(newReview);
      this.$router.push('/reviews-list');
    },
  },
  created() {
    this.resetForm();
  },
};
</script>
<style lang="scss">
  .add-review {
    background-color: #272A30;
    border-radius: 20px;
    color: #fff;
  }
</style>
