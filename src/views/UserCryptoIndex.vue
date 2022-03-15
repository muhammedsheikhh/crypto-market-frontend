<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cryptos: [],
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
      <button v-on:click="destroyPost(crypto)">Sell Now</button>
      <dialog id="photo-details">
        <form method="dialog">
          <h1>Photo info</h1>
          <p>Name:</p>
          <p>Width:</p>
          <p>Height:</p>
          <p>Url:</p>
          <button>Close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>
