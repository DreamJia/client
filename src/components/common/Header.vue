<template>
    <section>
        <div class="main-header">
            <div class="header-wrap">
                <h1>会推广公司集团管理</h1>
                <div class="person-msg">
                    <Dropdown @on-click="loginOut">
                        <a href="javascript:void(0)">
                            <Avatar icon="ios-person" size="large" />
                            <Icon type="md-arrow-dropdown" style="color:#;" />
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem name="msg">全国总代理</DropdownItem>
                            <DropdownItem name="details">详细信息</DropdownItem>
                            <DropdownItem name="details">系统设置</DropdownItem>
                            <DropdownItem name="login-out" style="color:#f00;">退出登录</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="system-msg">
                    <Badge :count="100">
                        <Icon type="ios-notifications-outline" size="40"></Icon>
                    </Badge>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginOut() {}
  }
};
</script>
<style lang="" scoped>
.main-header {
  width: 87%;
  height: 8vh;
  /* background: #555; */
  position: fixed;
  top: 0;
  left: 13%;
  z-index: 11;
}
.header-wrap {
  position: relative;
}
.header-wrap h1 {
  width: 30%;
  height: 8vh;
  line-height: 8vh;
  text-indent: 2rem;
}
.person-msg {
  width: 80px;
  height: 60px;
  position: absolute;
  right: 30px;
  font-size: 24px;
  color: #999;
  top: 2vh;
}
.system-msg {
  width: 60px;
  height: 60px;
  position: absolute;
  right: 140px;
  /* font-size: 2px; */
  color: #999;
  top: 2.5vh;
  cursor: pointer;
}
</style>