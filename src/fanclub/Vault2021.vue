<template>
  <div>
      <h1>Greetings Space Marauder!</h1>
      <p>
        Thank you for supporting the future of intergalactic underground speed metal!
        With your support, it's a little easier to keep our operation running.
        As a special token of our appreciation,
        we would therefore like to give you something in return.
      </p>
      <p>
      As of writing this, we have just entered the studio to record our third LP.
      This time, we want to raise the bar even more than on our previous albums.
      So as part of the preparation process,
      we have recorded demo versions of a few of the songs that will be included on the album.
      Below you will be able to listen to one of these demos,
      a track entitled "A Message From The Stars", that will also be the opening track on the album!
      </p>
      <p>
        Another new thing for this year is that we have added a comments field
        at the bottom of this page. So scroll down and write a few words about what you thought
        about the song, give feedback on this year's fanclub package or tell us about
        the weather at your home planet.
        Also if you have any ideas for future editions of the fanclub, please let us know!
      </p>
      <audio controls>
        <source src="../assets/A Message From The Stars (Demo).mp3" type="audio/mpeg" controls />
        Your browser does not support the audio element.
      </audio>
      <img src="../assets/armory_glitch.jpg" />
      <br />
      Enjoy and speed on!
      <p>ARMORY
        <br />January 16th, 2021, Earth
      </p>
      <CommentsSection pageId="fanclub2021"/>
    </div>
</template>

<script>
import CommentsSection from './commentsView/CommentsSection.vue';

export default {
  components: {
    CommentsSection,
  },
  name: 'Vault2021',
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
