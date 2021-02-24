<template>
  <main-layout>
    <h1>Armory Experimentation Lab</h1>
    <p>
      TOP SECRET!
    </p>
    <NewCommentField/>
    <div  class="comments">
        <div v-for="item in this.comments" v-bind:key="item.timestampUnique">
            <Comment v-bind:item="item"/>
        </div>
    </div>

  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Comment from './commentsView/Comment.vue';
import NewCommentField from './commentsView/NewCommentField.vue';

const axios = require('axios').default;

export default {
  components: {
    MainLayout,
    Comment,
    NewCommentField,
  },
  data() {
    return { comments: '' };
  },
  created() {
    console.log('make request');
    axios.get('https://imgtv0cop5.execute-api.eu-west-1.amazonaws.com/Prod/comments/test777')
      .then((response) => {
        this.comments = response.data.comments;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style scoped>
div.comments {
    background-color: #004114;
    display: flex;
    flex-direction: column;
}

</style>
