<script>
import axios from "axios";
export default {
  data: function () {
    return {
      cryptos: [],
      userCrypto: { crypto: {} },
      editUserCryptoQuantity: 0,
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
      this.editUserCryptoQuantity = userCrypto.quantity;
      document.querySelector("#photo-details").showModal();
    },
    updateUserCrypto: function (userCrypto) {
      var params = { quantity: userCrypto.quantity - this.editUserCryptoQuantity };
      console.log("params", params, userCrypto.quantity, this.editUserCryptoQuantity);
      axios
        .patch("/user_cryptos/" + userCrypto.id, params)
        .then((response) => {
          console.log("photos update", response);
          // this.userCrypto = {};
          userCrypto.quantity = response.data.quantity;
        })
        .catch((error) => {
          console.log("photos update error", error.response);
        });
    },
    destroyPost: function (crypto) {
      axios.delete("/user_cryptos/" + crypto.id).then((response) => {
        console.log("cryptos destroy", response);
        this.$router.push("/UserCrypto");
        var index = this.cryptos.indexOf(crypto);
        this.cryptos.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <div class="cryptos-index">
    <section class="pricing-table section" id="pricing">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="title text-center">
              <h2>Portfolio</h2>
              <span class="border"></span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-12" v-for="crypto in cryptos" v-bind:key="crypto.id">
                    <div class="pricing-item">
                      <h3>{{ crypto.crypto.code }}</h3>
                      <div class="pricing-body">
                        <div class="price">
                          <span>{{ crypto.crypto.code }}</span>
                          <span class="sup"></span>
                        </div>
                        <div class="progress" data-percent="45%">
                          <div class="progress-bar"></div>
                        </div>
                        <p
                          v-bind:class="{
                            'text-success': crypto.crypto.price - crypto.bprice >= 0,
                            'text-danger': crypto.crypto.price - crypto.bprice < 0,
                          }"
                        >
                          Current Price: {{ crypto.crypto.price }} $
                        </p>
                        <p
                          v-bind:class="{
                            'text-success': crypto.crypto.price - crypto.bprice >= 0,
                            'text-danger': crypto.crypto.price - crypto.bprice < 0,
                          }"
                        >
                          Profit: {{ parseInt((crypto.crypto.price - crypto.bprice) * crypto.quantity) }} $
                        </p>
                        <p>Quantity: {{ crypto.quantity }}</p>
                        <p>Buy Price: {{ parseInt(crypto.bprice) }}</p>

                        <p>Total Worth: {{ crypto.total }} $</p>
                        <a class="btn btn-main" v-on:click="showUserCrypto(crypto)">Sell</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12"></div>
        </div>
      </div>
      <!-- End container -->
    </section>

    <dialog id="photo-details">
      <form method="dialog">
        <h1>Selling</h1>
        <p>Name: {{ userCrypto.crypto.name }}</p>
        <p>quantity: {{ userCrypto.quantity }}</p>
        <p>
          <input type="text" v-model="editUserCryptoQuantity" />
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
