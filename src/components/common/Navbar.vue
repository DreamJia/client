<template>
    <section>
        <div class="main-nav">
            <Tag type="dot" color="primary">首页</Tag>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="" scoped>
.main-nav {
  width: 87%;
  height: 4vh;
  background: rgb(218, 218, 218);
  position: fixed;
  top: 8vh;
  left: 13%;
  z-index: 10;
  box-sizing: border-box;
  padding-left: 10px;
}
</style>