<script>
import axios from "axios";
export default {
  data: function () {
    return {
      crypto: {},
      quantity: 0,
    };
  },
  created: function () {
    console.log(this.$route.params.id);
    axios.get("/cryptos/" + this.$route.params.id).then((response) => {
      console.log("cryptos show", response);
      this.crypto = response.data;
    });
  },
  methods: {
    destroyPost: function (crypto) {
      axios.delete("/cryptos/" + crypto.id).then((response) => {
        console.log("cryptos destroy", response);
        var index = this.cryptos.indexOf(crypto);
        this.cryptos.splice(index, 1);
      });
    },
    createCartedProduct: function () {
      var params = {
        quantity: this.quantity,
        symbol: this.crypto.symbol,
        price: this.crypto.lastPrice,
        name: this.crypto.symbol,
      };
      axios
        .post("/user_cryptos", params)
        .then((response) => {
          console.log("carted cryptos create", response);
          this.$router.push("/UserCrypto");
        })
        .catch((error) => {
          console.log("carted cryptos create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="cryptos-show">
    <h1>{{ crypto.name }}</h1>
    <p>{{ crypto.symbol }}</p>
    <p>{{ crypto.volume }}</p>
    <p>Price: {{ crypto.lastPrice }}$</p>
    <br />
    <router-link to="/cryptos">Back to all cryptos</router-link>
    <br />
    <input type="text" v-model="quantity" />
    <button v-on:click="createCartedProduct()">Buy Now</button>
  </div>
</template>
