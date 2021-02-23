<template>
  <main-layout>
    <h1>Armory Experimentation Lab</h1>
    <p>
      TOP SECRET!
    </p>
    <Comment name="GG" comment="tjena alla"/>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Comment from './commentsView/Comment.vue';

const axios = require('axios').default;

export default {
  components: {
    MainLayout,
    Comment,
  },
  created() {
    console.log('make request');
    axios.get('https://imgtv0cop5.execute-api.eu-west-1.amazonaws.com/Prod/comments/test777')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>
