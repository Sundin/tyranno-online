<template>
  <main-layout>
    <h1>Welcome to Vault Seven</h1>
    <p>To Enter the Vault, enter the secret of steel</p>
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
    <div v-if="hasAccess">hej</div>
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
      console.log(password);
      this.wrongPassword = this.pw.toLowerCase().trim() !== "aaa";
      var self = this;
      setTimeout(() => {
        self.wrongPassword = false;
      }, 1500);
      this.enterButtonPressed = this.pw.toLowerCase().trim() === "aaa";
    },
    isSpaceMarauder(password) {
      return password === "aaa";
    }
  },
  data: function() {
    return {
      pw: "",
      secretOfSteel: "aaa",
      enterButtonPressed: false,
      wrongPassword: false
    };
  },
  computed: {
    hasAccess: function() {
      return this.enterButtonPressed && this.pw.toLowerCase().trim() === "aaa";
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