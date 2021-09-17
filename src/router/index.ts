import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/components/Home.vue";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";
import Dashboard from "@/components/Dashboard.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        component: SignIn,
      },
      {
        path: "/signup",
        component: SignUp,
      },
    ],
  },

  { path: "/dashboard", name: "dashboard", component: Dashboard },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
