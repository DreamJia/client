<template>
  <section>
    <div class="main-menu">
      <div class="main-logo">
        <img src="@/assets/logo_zuocejuzhong.png" alt="">
      </div>
      <Menu style="text-align:left;width:100%;height:100vh;box-sizing:border-box;" active-name="index">
        <MenuItem name="index">
        <router-link to="/index" tag="div" class="router-button">
         <Icon type="ios-home" size="24" />
        首页
        </router-link>
        </MenuItem>
        <!--  -->
        <MenuItem v-for="(item,index) in menuList" :name="item.name" :key="index">
        <router-link :to="item.path" tag="div" class="router-button">
          <Icon size="24" :type="item.meta.icon" />
          {{item.meta.title}}
        </router-link>
        </MenuItem>
      </Menu>
    </div>
  </section>
</template>
<script>
//获取左侧菜单
import { Get_menu } from "_api";
export default {
  data() {
    return {
      msg: "Layout组件",
      menuList: []
    };
  },
  created() {
    Get_menu().then(res => {
      if (res.status) {
        let d = res.data;
        console.log(d);
        let r = [];
        for (let i = 0, len = d.length; i < len; i++) {
          let y = d[i].module.router_name;
          let t = d[i].module.router_component;
          let q = {
            path: d[i].module.router_path,
            name: d[i].module.router_name,
            meta: {
              title: d[i].module.module_name,
              icon: "md-albums"
            },
            component: resolve => require(["@cp/" + y + "/" + t], resolve)
          };
          r.push(q);
        }
        this.menuList = r;
        this.$router.addRoutes(r);
        // console.log(r);
        console.log(this.$router);
      }
    });
  }
};
</script>
<style lang="" scoped>
.main-menu {
  width: 13%;
  height: 100vh;
  background: rgb(0, 21, 42);
  position: fixed;
  left: 0;
  top: 0;
}
.main-logo {
  width: 100%;
  height: 8vh;
  background: #fff;
  /* box-sizing: border-box; */
  padding-top: 2vh;
  border-right: 1px solid #dcdee2;
}
.main-logo img {
  margin-left: 20%;
  width: 60%;
  height: auto;
  vertical-align: middle;
}
</style>