<template>
  <div class="Guide">
    <h1>{{ msg }}</h1>
    <el-row :gutter="20">
      <el-col :span="16"
              :offset="4">
        <div v-html="desc"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'GuideInformation',
  props: {
    msg: String,
    desc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
