<template>
  <div id="DownloadFile">
    <el-row>
      <el-col :span="24">
        <!-- 参数设置 -->
        <el-card shadow="always">
          <img alt="Download"
               src="~@/assets/chip.png">
          <el-tooltip class="item"
                      effect="dark"
                      content="当前版本"
                      placement="top">
            <h3> {{ version }} </h3>
          </el-tooltip>
          <ProgressBar v-if="isStart"
                       :percentage="percentage"></ProgressBar>
          <el-button type="text"
                     :disabled="isDisable"
                     @click="startDownload">开始下载</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ProgressBar from '@/components/GeneralCmp/ProgressBar.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProgramPublish',
  components: {
    ProgressBar
  },
  data () {
    return {
      version: '*****23r23443****',
      isStart: false,
      downloadSetInterval: 0,
      isDisable: false,
    }
  },
  sockets: {
    downloader (data) {
      console.log(data)
      this.$store.dispatch('changePercent', data.percentage)
      this.$store.dispatch('addInfo', data)
      if (data.type === 'ok') {
        this.isStart = false
        this.isDisable = false
        this.$store.dispatch('changePercent', 0)
        this.$message({
          message: '下载成功！',
          type: 'success'
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      percentage: 'getPercentage'
    })
  },
  methods: {
    startDownload () {
      this.isStart = true
      this.isDisable = true
      this.$socket.emit('downloader', 'start')
    }
  }
}
</script>
<style scoped lang="scss">
.el-row {
  line-height: 20px;
  text-align: center;
}
h3 {
  color: #909399;
}
</style>