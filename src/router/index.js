import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import { getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      privado:true,
    },
  },
  {
    path: "/login",
    component: Login,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  console.log(auth);
  let user = auth.currentUser;
  console.log(user);
  console.log(to);
  let private_rute = to.meta.privado;
  //guardia
  if (private_rute && !user) {
    next("/login");
  } else if (private_rute == undefined && user) {
    next("/");
  } else {
    next();
  }
});

export default router;
