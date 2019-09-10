<template>
  <div class="index">
    <el-container class="el-wrap">
      <!-- 头部 -->
      <el-header>
        <div class="logo">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="title">
          <h1>电商后台管理系统</h1>
        </div>
        <div class="logout">
          <p>
            <span>欢迎光临~</span>
            <a href="javascript:;" @click="logout">退出</a>
          </p>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边导航 -->
        <el-aside width="200px">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="users">
                <i class="el-icon-menu"></i>
                <span slot="title">用户列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="roles">
                <i class="el-icon-menu"></i>
                <span slot="title">角色列表</span>
              </el-menu-item>
              <el-menu-item index="rights">
                <i class="el-icon-menu"></i>
                <span slot="title">权限列表</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      try {
        await this.$confirm('亲，您真的要退出登录吗？', '退出提示', { type: 'waring' })
        // 删除token
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message.success('退出登录成功')
      } catch (e) {
        console.log(e)
        this.$message.info('退出登录取消')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  .el-wrap {
    height: 100%;
  }
  .el-header {
    background-color: #d8d8d8;
    display: flex;
    .logo {
      width: 180px;
      text-align: center;
      padding-top: 10px;
      img {
        height: 40px;
      }
    }
    .title {
      flex: 1;
      h1 {
        margin: 0;
        padding: 0;
        line-height: 60px;
        text-align: center;
        color: #545c64;
      }
    }
    .logout {
      width: 180px;
      line-height: 60px;
      text-align: right;
      font-size: 18px;
      font-weight: 700;
      span {
        margin-right: 10px;
      }
      a {
        color: orange;
      }
    }
  }

  // 侧边导航
  .el-aside {
    background-color: #545c64;
    .el-menu {
      border-right: none;
    }
  }
}
</style>
