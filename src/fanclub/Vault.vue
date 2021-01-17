<template>
  <main-layout>
    <div v-if="hasAccess">
      <div v-if="chosenYear === 2019">
        <vault-2019/>
      </div>
      <div v-if="chosenYear === 2020">
        <vault-2020/>
      </div>
      <div v-if="chosenYear === 2021">
        <vault-2021/>
      </div>
    </div>
    <div v-else-if="chosenYear === null">
      <h1>Welcome to Vault Seven</h1>
      <p>Chose the year for which your password is valid:</p>
      <p>
        <button v-on:click="selectYear(2019)">2019</button>
        <button v-on:click="selectYear(2020)">2020</button>
        <button v-on:click="selectYear(2021)">2021</button>
      </p>
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
        v-on:keyup.enter="enterVault()"
      />
      <p>
        <button
          v-on:click="enterVault()"
          v-bind:class="{ validPassword: validPasswordEntered }"
        >
          ENTER THE VAULT
        </button>
      </p>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Vault2019 from './Vault2019.vue';
import Vault2020 from './Vault2020.vue';
import Vault2021 from './Vault2021.vue';

const vault = {
  components: {
    MainLayout,
    Vault2019,
    Vault2020,
    Vault2021,
  },
  methods: {
    selectYear(year) {
      this.chosenYear = year;
    },
    enterVault() {
      this.wrongPassword = !this.correctPassword();
      const self = this;
      setTimeout(() => {
        self.wrongPassword = false;
      }, 1500);
      this.enterButtonPressed = this.correctPassword();
    },
    correctPassword() {
      const normalizedPassword = this.pw.toLowerCase().trim();
      switch (this.chosenYear) {
        case 2021:
          return this.hashCode(normalizedPassword) === -1153224625;
        case 2019:
        case 2020:
        default:
          return this.hashCode(normalizedPassword) === 1642731934;
      }
    },
    hashCode(str) {
      /* eslint no-bitwise: 0 */
      return str
        .split('')
        .reduce(
          (prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
          0,
        );
    },
  },
  data() {
    return {
      pw: '',
      enterButtonPressed: false,
      wrongPassword: false,
      chosenYear: null,
    };
  },
  computed: {
    hasAccess() {
      return this.enterButtonPressed && this.correctPassword();
    },
    validPasswordEntered() {
      return this.correctPassword();
    },
  },
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
  outline: none;
}

.wrongPassword {
  border: 2px solid #ff0000;
  color: #ff0000;
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
  padding: 10px 25px;
  margin: 0px 15px;
  font-family: Georgia, serif;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  transition: 0.3s;
}

button.validPassword {
    border: 2px solid #00ce1c;
    color: #00ce1c;
    animation-name: blinker;
    animation-duration: 0.4s;
    animation-timing-function: linear;
    animation-delay: infinite;
    animation-iteration-count: 1;
    animation-direction: alternate;
    opacity: 1;
  }

button:hover {
  opacity: 1;
  background-color: #6a0000;
}
</style>
