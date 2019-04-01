<template>
  <div class="home">
    <img alt="USB Port"
         src="~@/assets/usb.png">
    <Introduction :msg="msg"
                  :desc="desc" />
    <el-row :gutter="20">
      <el-col :span="16"
              :offset="4">
        <PortSet></PortSet>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import PortSet from '@/components/GeneralCmp/PortSet.vue'
import Introduction from '@/components/GeneralCmp/GuideInformation.vue'

import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      msg: '欢迎使用!',
      desc: `<p>这是一个网页端的串口调试工具
            使用之前请用您的USB线将设备连接到电脑。</p>
            <strong>步骤如下：</strong>
            <p>1.选择串口号和波特率，点击连接</p>
            <p>2.连接成功后按您的需要点击上方 参数下载 或 程序更新</p>
            <p>...</p>`,
    }
  },
  components: {
    PortSet,
    Introduction
  },
  sockets: {
    connect () {
      console.log('socket connected')
    },
    login (value) {
      console.log(value)
    }
  },
  computed: {
    ...mapState({
      connectStatus: state => state.dialog.connectStatus,
    }),
  },
  methods: {
    

  }
}
</script>
<style scoped>
.home {
  text-align: center;
}
</style>
