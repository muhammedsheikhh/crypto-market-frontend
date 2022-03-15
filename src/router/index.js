import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CryptoIndex from "../views/CryptoIndex.vue";
import CryptoShow from "../views/CryptoShow.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UserCryptoIndex from "../views/UserCryptoIndex.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/cryptos", name: "crypto-index", component: CryptoIndex },
  { path: "/cryptos/:id", name: "crypto-show", component: CryptoShow },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/UserCrypto", name: "usercrypto-index", component: UserCryptoIndex },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
