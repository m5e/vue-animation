import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/components/MainPage";
import Animation from "@/components/Animation";
import Animation2 from "@/components/Animation2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/animation",
      name: "Animation",
      component: Animation
    },
    {
      path: "/animation2",
      name: "Animation2",
      component: Animation2
    }
  ]
});
