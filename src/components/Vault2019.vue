<template>
  <div class="vault-2020">
      <h1>Greetings Space Marauder!</h1>
      <h2>2019</h2>
      <p>
        Without you our mission would be doomed to fail.
        As a special token of our appreciation,
        we would therefore like to give you something in return.
      </p>
      <p>
      Below you will find an unreleased song entitled MIDNIGHT KILLER for your ears only.
      It was recorded during the "The Search" sessions but ultimately left off the final album.
      </p>
      Enjoy and keep on speeding out there!
      <br />
      <br />
      <audio controls>
        <source src="../assets/Midnight_Killer.mp3" type="audio/mpeg" controls />
        Your browser does not support the audio element.
      </audio>
      <p>ARMORY 2019</p>
    </div>
</template>

<script>
export default {
  name: 'Vault2020',
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
input {
  background-color: #000000;
  color: var(--text-color);
  font-size: 21px;
  text-align: center;
  border: 2px solid var(--text-color);
  outline: none;
}

.wrongPassword {
  border: 2px solid #ff0000;
  animation-name: blinker;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-delay: infinite;
  animation-iteration-count: 3;
  animation-direction: alternate;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

button {
  background-color: #410000;
  color: var(--text-color);
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid var(--text-color);
  padding: 5px 15px;
  font-family: Georgia, serif;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  transition: 0.3s;
}

button:hover {
  opacity: 1;
}
</style>
