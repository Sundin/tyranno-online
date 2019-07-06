<template>
  <main-layout>
    <div v-if="hasAccess">
      <h1>Greetings Space Marauder!</h1>
      <p>
        Without you our mission would be doomed to fail.
        As a special token of our appreciation, we would therefore like to give you something in return.
      </p>
      <p>
        Below you will find an unreleased song under entitled MIDNIGHT KILLER for your ears only. It was recorded during the "The Search" sessions but ultimately left off the album.
        Enjoy and keep on speeding!
      </p>
      <br />
      <audio controls>
        <source src="../assets/Midnight_Killer.mp3" type="audio/mpeg" controls />Your browser does not support the audio element.
      </audio>
      <p>ARMORY 2019</p>
    </div>
    <div v-else>
      <h1>Welcome to Vault Seven</h1>
      <p>To access the Vault, enter the secret of steel:</p>
      <input
        type="password"
        v-bind:class="{ wrongPassword: wrongPassword }"
        v-model="pw"
        autofocus="autofocus"
        onfocus="this.select()"
      />
      <p>
        <button v-on:click="enterVault(pw)">ENTER THE VAULT</button>
      </p>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";

var vault = {
  components: {
    MainLayout
  },
  methods: {
    enterVault(password) {
      this.wrongPassword = !this.correctPassword();
      var self = this;
      setTimeout(() => {
        self.wrongPassword = false;
      }, 1500);
      this.enterButtonPressed = this.correctPassword();
    },
    correctPassword() {
      const normalizedPassword = this.pw.toLowerCase().trim();
      return this.hashCode(normalizedPassword) === -114314724;
    },
    hashCode(str) {
      return str
        .split("")
        .reduce(
          (prevHash, currVal) =>
            ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
          0
        );
    }
  },
  data: function() {
    return {
      pw: "",
      enterButtonPressed: false,
      wrongPassword: false
    };
  },
  computed: {
    hasAccess: function() {
      return this.enterButtonPressed && this.correctPassword();
    }
  }
};

export default vault;
</script>

<style scoped>
input {
  background-color: #000000;
  color: var(--text-color);
  font-size: 21px;
  text-align: center;
  border: 2px solid var(--text-color);
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
  opacity: 0.8;
  transition: 0.3s;
}

button:hover {
  opacity: 1;
}
</style>