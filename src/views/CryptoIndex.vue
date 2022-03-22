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
  <section class="pricing-table section" id="pricing">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title text-center">
            <h4>Easy Pricing</h4>
            <h2>Pricing.</h2>
            <span class="border"></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque
              sit!
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <ul class="nav nav-pills mb-6 pricing-tab justify-content-center" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Buy
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Sell
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12" v-for="crypto in cryptos" v-bind:key="crypto.id">
                  <div class="pricing-item">
                    <h3>Volume: {{ parseFloat(crypto.volume) }}</h3>
                    <div class="pricing-body">
                      <div class="price">
                        <span>{{ crypto.symbol }}</span>
                        <span class="sup"></span>
                      </div>
                      <div class="progress" data-percent="45%">
                        <div class="progress-bar"></div>
                      </div>
                      <p>Price: {{ parseFloat(crypto.lastPrice) }}$</p>
                      <a class="btn btn-main" v-bind:href="`/cryptos/${crypto.symbol}`">Buy</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="pricing-item">
                    <h3>Get 0.112 ETH</h3>
                    <div class="pricing-body">
                      <div class="price">
                        <span>€803</span>
                        <span class="sup">95</span>
                      </div>
                      <div class="progress" data-percent="45%">
                        <div class="progress-bar"></div>
                      </div>
                      <p>You get 0.0364727 Bitcoins</p>
                      <a class="btn btn-main" href="#">Sell</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="pricing-item">
                    <h3>Get 0.112 ETH</h3>
                    <div class="pricing-body">
                      <div class="price">
                        <span>€283</span>
                        <span class="sup">15</span>
                      </div>
                      <div class="progress" data-percent="60%">
                        <div class="progress-bar"></div>
                      </div>
                      <p>You get 0.0364727 Bitcoins</p>
                      <a class="btn btn-main" href="#">Sell</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="pricing-item">
                    <h3>Get 0.112 ETH</h3>
                    <div class="pricing-body">
                      <div class="price">
                        <span>€122</span>
                        <span class="sup">00</span>
                      </div>
                      <div class="progress" data-percent="75%">
                        <div class="progress-bar"></div>
                      </div>
                      <p>You get 0.0364727 Bitcoins</p>
                      <a class="btn btn-main" href="#">Sell</a>
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
</template>
