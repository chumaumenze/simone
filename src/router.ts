import Vue from "vue";
import Router from "vue-router";
import SlideTabView from "@/views/SlideTabView/SlideTabView.vue";
import TabView from "@/views/TabView/TabView.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      component: SlideTabView,
      name: "dialer-view",
      // components: {
      //   default: () => import("./views/Dialer.vue"),
      //   dialer: () => import("./views/Dialer.vue"),
      //   profile: () => import("./views/Profile.vue"),
      // },
      children: [
        {
          path: "dialer",
          name: "dialer",
          component: () => import("./views/Dialer.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/Profile.vue"),
        },
      ],
    },
    {
      path: "/legacy",
      component: TabView,
      // redirect: "/legacy/dialer",
      components: {
        "legacy-dialer": () => import("@/views/LegacyDialer.vue"),
        "legacy-logs": () => import("@/views/LegacyDialer.vue"),
        "legacy-settings": () => import("@/views/LegacyDialer.vue"),
      },
      // children: [
      //   {
      //     path: "dialer",
      //     name: "legacy-dialer",
      //     component: () => import("@/views/LegacyDialer.vue"),
      //   },
      //   {
      //     path: "logs",
      //     name: "legacy-logs",
      //     component: () => import("./views/LegacyDialer.vue"),
      //   },
      //   {
      //     path: "settings",
      //     name: "legacy-settings",
      //     component: () => import("./views/LegacyDialer.vue"),
      //   },
      // ],
    },
  ],
});
