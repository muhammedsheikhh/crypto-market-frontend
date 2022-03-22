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
  <div id="preloader">
    <div class="preloader">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
      <div class="sk-circle11 sk-child"></div>
      <div class="sk-circle12 sk-child"></div>
    </div>
  </div>
  <!--
  End Preloader
  ==================================== -->

  <!--
Fixed Navigation
==================================== -->
  <section class="top-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <ul class="currency-status">
            <li>
              <a href="#">
                <i class="tf-ion-arrow-down-b down-status"></i>
                <span>BTC/USD</span>
                <span>15046.07</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="tf-arrow-dropup up-status"></i>
                <span>ETH/USD</span>
                <span>843.0005</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="tf-arrow-dropup up-status"></i>
                <span>BCH/USD</span>
                <span>2648.1377</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="tf-arrow-dropup up-status"></i>
                <span>BTG/USD</span>
                <span>278.0000</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="tf-arrow-dropup down-status"></i>
                <span>DASH/USD</span>
                <span>1131.8100</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="tf-arrow-dropup down-status"></i>
                <span>XRP/USD</span>
                <span>2.1956</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="tf-arrow-dropup up-status"></i>
                <span>ZEC/USD</span>
                <span>2.1956</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="header navigation">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="tf-ion-android-menu"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/cryptos">Buy/Sell</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Faq">F.A.Q</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contact">Contact</a>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/UserCrypto">Wallet</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if="!isLoggedIn" class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if="!isLoggedIn" class="nav-link" to="/signup">Signup</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if="isLoggedIn" class="nav-link" to="/logout">Logout</router-link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="team.html">Team Page</a>
                    <a class="dropdown-item" href="404.html">404 Page</a>
                    <a class="dropdown-item" href="blog.html">Blog Page</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <div v-if="flashMessage" class="alert alert-success banner">{{ flashMessage }}</div>
  <router-view />
  <footer id="footer" class="bg-one">
    <div class="top-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-3 col-lg-3">
            <h3>INFORMATION</h3>
            <ul>
              <li><a href="#">Payment Option</a></li>
              <li><a href="#">Free Schedule</a></li>
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">Bitcoin Calculator</a></li>
            </ul>
          </div>
          <!-- End of .col-sm-3 -->

          <div class="col-sm-3 col-md-3 col-lg-3">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
            </ul>
          </div>
          <!-- End of .col-sm-3 -->

          <div class="col-sm-3 col-md-3 col-lg-3">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Partners</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">FAQ’s</a></li>
              <li><a href="#">Badges</a></li>
            </ul>
          </div>
          <!-- End of .col-sm-3 -->

          <div class="col-sm-3 col-md-3 col-lg-3">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
              <li>
                <a href="">Google PLus</a>
              </li>
            </ul>
          </div>
          <!-- End of .col-sm-3 -->
        </div>
      </div>
      <!-- end container -->
    </div>
    <div class="footer-bottom">
      <h5>Copyright 2022. All rights reserved.</h5>
      <h6>Trading Services Inc. d.b.a.Crypto Market.US NMLS ID: 14567829</h6>
    </div>
  </footer>
</template>

<style></style>
