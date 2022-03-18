<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cryptos: [],
      userCrypto: { crypto: {} },
      editUserCrypto: {},
    };
  },
  created: function () {
    this.indexCryptos();
  },
  methods: {
    indexCryptos: function () {
      axios.get("/user_cryptos").then((response) => {
        console.log("cryptos index", response);
        this.cryptos = response.data;
      });
    },
    showUserCrypto: function (userCrypto) {
      this.userCrypto = userCrypto;
      this.editUserCrypto = userCrypto;
      document.querySelector("#photo-details").showModal();
    },
    updateUserCrypto: function (userCrypto) {
      axios
        .patch("/user_cryptos/" + userCrypto.id, this.editUserCrypto)
        .then((response) => {
          console.log("photos update", response);
          this.userCrypto = {};
        })
        .catch((error) => {
          console.log("photos update error", error.response);
        });
    },
    destroyPost: function (crypto) {
      axios.delete("/user_cryptos/" + crypto.id).then((response) => {
        console.log("cryptos destroy", response);
        this.$router.push("/UserCrypto");
      });
    },
  },
};
</script>

<template>
  <div class="cryptos-index">
    <h1>Your Cryptocurrencies</h1>
    <div v-for="crypto in cryptos" v-bind:key="crypto.id">
      <h2>{{ crypto.crypto.symbol }}</h2>
      <p>{{ crypto.crypto.code }}</p>
      <p>{{ crypto.crypto.price }}$</p>
      <p>{{ crypto.quantity }}</p>
      <p>{{ crypto.total }}</p>
      <p>{{ crypto.status }}</p>
      <a v-bind:href="`/cryptos/${crypto.id}`">More details</a>
      <br />
      <button v-on:click="showUserCrypto(crypto)">Sell Now</button>
    </div>
    <dialog id="photo-details">
      <form method="dialog">
        <h1>Selling</h1>
        <p>Name: {{ userCrypto.crypto.name }}</p>
        <p>quantity: {{ userCrypto.quantity }}</p>
        <p>
          <input type="text" v-model="editUserCrypto.quantity" />
        </p>
        <button v-on:click="updateUserCrypto(userCrypto)">Sell some</button>
        <br />
        <button v-on:click="destroyPost(userCrypto)">Sell Now</button>
        <br />
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>
