<template>
  <section>
    <div class="main-login">
      <div class="login-wrap">
        <Card shadow>
          <p slot="title">欢迎登录</p>
          <Form ref="formInline" :model="formInline" :rules="ruleInline" @keyup.enter.native="handleSubmit('formInline')">
            <FormItem prop="username">
              <Input type="text" v-model="formInline.username" placeholder="输入用户名">
              <Icon type="ios-person-outline" slot="prepend" size="20"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="输入密码">
              <Icon type="ios-lock-outline" slot="prepend" size="20"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" long @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    </div>
  </section>
</template>
<script>
import { Login_in } from "_api";
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        username: "",
        password: ""
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "输入的用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "输入的密码不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "输入的密码格式不正确，请重新确认后再输入",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          Login_in(this.formInline).then(res => {
            if (res.status) {
              this.$Message.success("登陆成功");
              let Token = res.data;
              sessionStorage.setItem("token", Token);
              this.$router.push({ path: "/index" });
            } else {
              this.$Message.error("您输入的用户名或者密码错误，请重新输入");
            }
          });
        } else {
          this.$Message.error("您输入的用户名或密码格式不正确");
        }
      });
    }
  }
};
</script>
<style lang="" scoped>
.main-login {
  width: 100%;
  height: 100vh;
  background: url(../../assets/login-bg.jpg) center center no-repeat;
}
.login-wrap {
  width: 320px;
  position: absolute;
  right: 160px;
  top: 50%;
  transform: translateY(-60%);
}
</style>