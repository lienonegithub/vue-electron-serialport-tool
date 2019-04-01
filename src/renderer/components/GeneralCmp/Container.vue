<template>
  <div id="container">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router="">
          <el-menu-item index="/home">主页</el-menu-item>       
          <el-menu-item index="/params-setting">参数下载</el-menu-item>
          <el-menu-item index="/download">程序更新</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>

export default {
  name: 'container',
  components: {

  },
  data () {
    return {
      activeIndex: '/',
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
.el-header {
  /* background-color: #67c23a; */
  /* color: #606266; */
  /* text-align: center; */
  /* line-height: 60px; */
  width: 100%;
}

.el-main {
  /* background-color: #F2F6FC; */
  color: #606266;
  /* text-align: center; */
  /* line-height: 500px; */
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}
</style>
