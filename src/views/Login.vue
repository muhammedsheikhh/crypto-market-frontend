<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <section class="signin-page account">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="block">
            <h2 class="text-center">Sign In to BitBank</h2>
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
            <form class="text-left clearfix mt-50" action="index.html" v-on:submit.prevent="submit()">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" v-model="newSessionParams.email" />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="newSessionParams.password"
                />
              </div>
              <button type="submit" class="btn btn-main">Sign In</button>
            </form>
            <p class="mt-20">
              New in this site ?
              <a href="signin.html">Create New Account</a>
            </p>
            <p><a href="forget-password.html">Forgot your password?</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
