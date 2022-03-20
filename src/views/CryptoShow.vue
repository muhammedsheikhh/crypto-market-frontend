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
  <section class="pricing-table section" id="pricing">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title text-center">
            <h4>Easy Buying</h4>
            <h2>Buying.</h2>
            <span class="border"></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque
              sit!
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12 hello">
                  <div class="pricing-item">
                    <h3>Volume: {{ crypto.volume }}</h3>
                    <div class="pricing-body">
                      <div class="price">
                        <span>{{ crypto.symbol }}</span>
                        <span class="sup"></span>
                      </div>
                      <div class="progress" data-percent="60%">
                        <div class="progress-bar"></div>
                      </div>
                      <p>Price: {{ crypto.lastPrice }}$</p>
                      <input type="text" v-model="quantity" />
                      <br />
                      <a class="btn btn-main" v-on:click="createCartedProduct()">Buy</a>
                      <br />
                      <router-link to="/cryptos">Back to all cryptos</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="custom-pricing text-center mt-30">
            <p>The price will be recalculated in 27 seconds</p>
            <p><a href="">How is the price calculated ?</a></p>
          </div>
        </div>
      </div>
    </div>
    <!-- End container -->
  </section>
</template>
<style>
.hello {
  margin-left: 33%;
}
</style>
