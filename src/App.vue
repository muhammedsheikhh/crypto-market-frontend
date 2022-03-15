<script>
export default {
  data: function () {
    return {
      isLoggedIn: undefined,
      flashMessage: "",
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.getItem("jwt");
      this.flashMessage = localStorage.getItem("flashMessage");
      localStorage.removeItem("flashMessage");
    },
  },
};
</script>

<template>
  <div id="nav">
    <div class="container-fluid">
      <!-- Nav Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link id="logo" class="navbar-brand" to="/">Crypto Market</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/cryptos">Cryptos</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/UserCrypto">Wallet</router-link></li>
            <li class="nav-item">
              <router-link v-if="!isLoggedIn" class="nav-link" to="/signup">Signup</router-link>
            </li>
            <li class="nav-item"><router-link v-if="!isLoggedIn" class="nav-link" to="/login">Login</router-link></li>
            <li class="nav-item"><router-link v-if="isLoggedIn" class="nav-link" to="/logout">Logout</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div v-if="flashMessage" class="alert alert-success banner">{{ flashMessage }}</div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #000000;
  color: rgb(255, 255, 255);
}

#nav a {
  font-weight: bold;
  color: rgb(255, 255, 255);
}

#nav a.router-link-exact-active {
  color: #019267;
}

h1 {
  padding-top: 3rem;
}

h2 {
  padding-top: 2rem;
}

#footer {
  padding: 3% 15%;
  margin-top: 2rem;
  text-align: center;
  background-color: #000000;
  color: #fff;
}

.banner {
  margin: 2%;
}
</style>
