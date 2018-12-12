<template>
    <section>
        <div class="main-footer">
            <p>{{msg}}</p>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      msg:
        "Copyright © 2017-2018 weixin.com their respective owners.Tel:0431-80860086"
    };
  }
};
</script>
<style lang="" scoped>
.main-footer {
  width: 87%;
  height: 4vh;
  position: fixed;
  bottom: 0;
  left: 13%;
  /* background: #111; */
  line-height: 4vh;
  text-align: center;
  font-size: 14px;
  z-index: 10;
}
.main-footer p {
  height: 4vh;
  line-height: 4vh;
}
</style>