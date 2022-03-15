<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>Crypto Market</h1>
  </div>

  <section id="features">
    <div class="row">
      <div class="col-lg-4">
        <img src="https://static.binance.us/static/images/us/next/home/tab1.svg" alt="" />
        <h3>Advanced Security</h3>
        <p>We use state-of-the-art storage technology to protect your cryptocurrency and USD assets</p>
      </div>
      <div class="col-lg-4">
        <img src="https://static.binance.us/static/images/us/next/home/tab1.svg" alt="" />
        <h3>Plentiful Pairs</h3>
        <p>Access a variety of cryptocurrencies and trading pairs</p>
      </div>
      <div class="col-lg-4">
        <img src="https://static.binance.us/static/images/us/next/home/tab1.svg" alt="" />
        <h3>Low Fees</h3>
        <p>Low fees empower you to buy, sell, and trade cryptocurrencies</p>
      </div>
    </div>
  </section>

  <div id="foter">
    <p>
      Crypto Market
      <br />
      NMLS ID: 1983829564
      <br />
      Phone: (800) 000-0000 Fax: (812) 000-0000
    </p>
    <p>©2022 TAM Trading Services Inc. d.b.a.CryptoMarket.US - All rights reserved.</p>
  </div>
</template>

<style>
#foter {
  padding: 3% 15%;
  text-align: center;
  background-color: #000000;
  color: #7897ab;
}
</style>
