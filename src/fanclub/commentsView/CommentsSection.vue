
<template>
  <div>
    <div class="new-comment">
      <h2>Leave a comment</h2>
      Name:
      <br />
      <input v-model="name" placeholder="Your name" />
      <p />
      Comment:
      <br />
      <textarea v-model="comment" placeholder="Write your comment here" />

      <p>
        <button v-on:click="submit()">Submit</button>
      </p>
      <slot></slot>
    </div>
    <h2>Comments:</h2>
    <div class="comments">
      <div v-for="item in sortedComments" v-bind:key="item.timestampUnique">
        <Comment v-bind:item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from './Comment.vue';

const axios = require('axios').default;

function randomId() {
  /* eslint-disable no-bitwise */
  /* eslint-disable no-mixed-operators */
  return 'xxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateTimestampUnique() {
  return `${Date.now()}-${randomId()}`;
}

const BASE_URL = 'https://imgtv0cop5.execute-api.eu-west-1.amazonaws.com/Prod/comments';

export default {
  components: {
    Comment,
  },
  props: {
    pageId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      comment: '',
      comments: [],
    };
  },
  created() {
    axios
      .get(`${BASE_URL}/${this.pageId}`)
      .then((response) => {
        this.comments = response.data.comments;
        console.log(response.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    sortedComments() {
      return this.comments
        .slice()
        .sort((a, b) => (a.timestampUnique < b.timestampUnique ? 1 : -1));
    },
  },
  methods: {
    submit() {
      const newComment = {
        name: this.name,
        comment: this.comment
          .replaceAll('\n', '<br/>')
          .replaceAll('\r', '<br/>'),
        timestampUnique: generateTimestampUnique(),
      };

      this.comments.push(newComment);

      axios
        .post(`${BASE_URL}/${this.pageId}`, newComment)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
div.new-comment {
  background-color: #004114;
  border: 2px solid var(--text-color);
  max-width: 666px;
  margin: 0 auto;
}
input,
textarea {
  background-color: #000000;
  color: var(--text-color);
  font-size: 21px;
  text-align: center;
  border: 2px solid var(--text-color);
  outline: none;
  width: 80%;
}
textarea {
  margin: 0 auto;
  height: 200px;
}
div.comments {
  background-color: #004114;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--text-color);
  max-width: 666px;
  margin: 0 auto;
}
</style>
