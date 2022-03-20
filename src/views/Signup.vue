<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: { name: "", password: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
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
          <div class="block text-center">
            <h2 class="text-center">Create Your Account</h2>
            <form class="text-left clearfix mt-30" action="index.html" v-on:submit.prevent="submit()">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Username" v-model="newUserParams.name" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" v-model="newUserParams.email" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" v-model="newUserParams.password" />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password Confirmation"
                  v-model="newUserParams.password_confirmation"
                />
              </div>
              <button type="submit" class="btn btn-main text-center">Sign In</button>
            </form>
            <p class="mt-20">
              Already hava an account ?
              <a href="login.html">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
