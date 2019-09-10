<template>
  <div class="login">
    <!-- 登录表单 -->
    <el-form ref="form" :model="form" status-icon :rules="rules" label-width="80px">
      <img class="pic" src="../assets/avatar.jpg" />
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
          @keyup.enter.native="login"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入用密码', trigger: ['blur', 'change'] },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    // 登录
    async login () {
      try {
        await this.$refs.form.validate()
        const { data } = await this.$axios.post('login', this.form)
        console.log(data)
        if (data.meta.status === 200) {
          this.$message.success(data.meta.msg)
          // 存储token
          localStorage.setItem('token', data.data.token)
          // 跳转到首页
          this.$router.push('/index')
        } else {
          this.$message.error(data.meta.msg)
        }
      } catch (e) {
        console.log(e)
      }
    },

    // 重置
    reset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss">
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    background-color: #fff;
    width: 400px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 20px;
    padding-top: 70px;
    border-radius: 20px;
    position: relative;
    .pic {
      position: absolute;
      left: 50%;
      top: -70px;
      transform: translateX(-50%);
      border: 5px solid skyblue;
      border-radius: 50%;
    }
    .loginBtn {
      margin-right: 80px;
    }
  }
}
</style>
