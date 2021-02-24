
<template>
  <div class="new-comment">
    <h2>Leave a comment</h2>
    <p>
        Name:
        <input v-model="name" placeholder="Your name"/>
    </p>
    <p>
        Comment:
        <textarea v-model="comment" placeholder="Write your comment here"/>
    </p>
    <p>
        <button v-on:click="submit()">Submit</button>
    </p>
    <slot></slot>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  data() {
    return {
      name: '',
      comment: '',
    };
  },

  methods: {
    submit() {
      console.log('hej', this.name);
      axios.post('https://imgtv0cop5.execute-api.eu-west-1.amazonaws.com/Prod/comments/test777', {
        name: this.name,
        comment: this.comment,
        timestampUnique: '666',
      })
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
}
button {
  background-color: #410000;
  color: var(--text-color);
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid var(--text-color);
  padding: 10px 25px;
  margin: 0px 15px;
  font-family: Georgia, serif;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  transition: 0.3s;
}
button:hover {
  opacity: 1;
  background-color: #6a0000;
}
input,textarea {
  background-color: #000000;
  color: var(--text-color);
  font-size: 21px;
  text-align: center;
  border: 2px solid var(--text-color);
  outline: none;
}

</style>
