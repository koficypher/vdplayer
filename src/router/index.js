import Vue from "vue";
import VueRouter from "vue-router";
import Video from "../views/Video.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "video",
    component: Video
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path: "/video",
  //   name: "video",
  //   component: () => import("../views/Video.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
