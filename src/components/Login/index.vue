<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="@/assets/logo.png" alt="avatar" />
      </div>
      <!-- <div class="title">登录/Login</div> -->
      <el-form
        label-width="0px"
        class="login-form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            autocomplete="off"
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            autocomplete="off"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item class="footer-buttons">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单的数据绑定对象
      loginForm: {
        username: '',
        password: '',
      },
      // 表单的验证规则对象
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '用户名长度在3到10个字符之间',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 12,
            message: '密码长度在6到12各字符之间',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    loginAndSwitch() {
      this.$socket.emit('userloginServer', this.username)
    },
    resetLoginForm() {
      // 重置表单，element-form提供的方法
      this.$refs.loginFormRef.resetFields()
    },
    // 登录
    login() {
      // 表单预验证
      this.$refs.loginFormRef.validate((valid) => {
        console.log(valid)
      })
    },
  },
  sockets: {
    userloginClient({ success }) {
      // 验证成功后进入聊天室
      if (success) {
        this.$router.push({
          path: '/chat',
        })
      } else {
        this.$message('登录失败')
      }
    },
  },
}
</script>

<style scoped lang="less">
.login-container {
  background-color: #76aacb;
  height: 100%;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  border-radius: 5px;
  background-color: #fff;
  // padding: 10px;

  .avatar-box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;

  .footer-buttons {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
