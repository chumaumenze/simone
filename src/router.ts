import Vue from "vue";
import Router from "vue-router";
import Dialer from "./views/Dialer.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      component: Dialer,
      children: [
        {
          path: "",
        name: "dialer",
        },
      ],
    },
    {
      path: "/profile",
      name: "profile",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Profile.vue"),
    },
  ],
});
