<template>
  <div id="app">
    <section v-if="$route.path!='/login'">
      <Layout />
      <Header />
      <Navbar />
      <div class="main-content">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
      <Footer />
    </section>
    <router-view v-if="$route.path=='/login'"></router-view>
  </div>
</template>

<script>
import Layout from "@cp/common/Layout";
import Header from "@cp/common/Header";
import Navbar from "@cp/common/Navbar";
import Footer from "@cp/common/Footer";

export default {
  name: "App",
  components: {
    Layout,
    Header,
    Navbar,
    Footer
  },
  watch: {
    "$route.path": to => {
      if (to == "/login") {
        sessionStorage.removeItem("token");
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  overflow-y: hidden;
}
.main-content {
  width: 87%;
  height: 84vh;
  /* background: red; */
  position: absolute;
  top: 12vh;
  left: 13%;
  z-index: 1;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 10px;
}
.main-content p {
  width: 100%;
  height: 3000px;
}
</style>
