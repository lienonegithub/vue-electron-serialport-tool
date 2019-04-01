<template>
  <div id="ProgressBar">
    <el-progress :percentage="percentage">
    </el-progress>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    percentage: Number
  },
  data () {
    return {
      // percentage: 0,
    }
  },
  computed: {
    // setPercent () {
    //   const percent = this.percentage
    //   if (percent === 100) {
    //     this.isSucceed = true
    //   }
    //   return percent
    // }
  }
}
</script>
<style scoped>
</style>