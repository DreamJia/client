import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: "/login",
      name: "Login",
      component: resolve =>
        require(["@cp/login/Login"], resolve)
    },
    {
      path: "/index",
      name: "IndexPage",
      component: resolve =>
        require(["@cp/index/IndexPage.vue"], resolve)
    },
    // {
    //   path: "/index",
    //   name: "IndexPage",
    //   component: resolve =>
    //     require(["@cp/index/IndexPage.vue"], resolve)
    // },
  ]
})
