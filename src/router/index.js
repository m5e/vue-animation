/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/components/MainPage";
import Anime from "@/components/Anime";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/anime",
      name: "Anime",
      component: Anime
    }
  ]
});
