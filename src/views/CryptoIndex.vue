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
      axios.get("http://localhost:3000/cryptos").then((response) => {
        console.log("cryptos index", response);
        this.cryptos = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="cryptos-index">
    <h1>List of Cryptocurrencies</h1>
    <div v-for="crypto in cryptos" v-bind:key="crypto.id">
      <h2>{{ crypto.name }}</h2>
      <p>{{ crypto.symbol }}</p>
      <p>{{ crypto.volume }}$</p>
      <p>{{ crypto.lastPrice }}$</p>
      <a v-bind:href="`/cryptos/${crypto.symbol}`">More details</a>
    </div>
  </div>
</template>
