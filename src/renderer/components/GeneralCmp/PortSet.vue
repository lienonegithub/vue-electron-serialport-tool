<template>
  <div id="PortSet">
    <!-- 串口设置 -->
    <el-card class="box-card"
             shadow="never">
      <div slot="header"
           class="clearfix">
        <span>串口设置</span>
      </div>
      <el-form :inline="true"
               :model="params"
               ref="params"
               :rules="rules"
               class="demo-form-inline">
        <el-form-item label="串口"
                      prop="port">
          <el-select v-model="params.port"
                     :disabled="isDisabled"
                     placeholder="串口号">
            <el-option v-for="(port,index) in portsettings.port"
                       :key="index"
                       :label="port"
                       :value="port"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="波特率"
                      prop="baud">
          <el-select v-model="params.baud"
                     :disabled="isDisabled"
                     placeholder="波特率">

            <el-option v-for="(baud,index) in portsettings.baudRate"
                       :key="index"
                       :label="baud"
                       :value="baud"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button @click="onConnect('params')"
                     :type="btnType"
                     :disabled="isDisabled">{{ btnText }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'PortSet',
  data () {
    return {
      params: {
        port: '',
        baud: ''
      },
      rules: {
        port: [
          { required: true, message: '请选择串口', trigger: 'change' }
        ],
        baud: [
          { required: true, message: '请选择波特率', trigger: 'change' }
        ]
      },
      btnText: '连接',
      btnType: '',
      isDisabled: false
    }
  },
  sockets: {
    portset (data) {
      console.log("ReceivePortSetting:",data)
      this.$store.dispatch('SetPortSettings',data)
    },
    openning (data) {
      console.log(data)
    },
    openport (data) {
      if (!data)
        this.isDisabled = false
      else {
        this.btnText = '已连接',
          this.btnType = 'success'
        this.$message({
          message: '连接成功！',
          type: 'success'
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      portsettings: 'getPortSet',
    }),
  },
  methods: {
    onConnect (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isDisabled = true
          this.btnText = '连接中'
          this.$socket.emit('openport', this.params)
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    }
  }
}
</script>
<style scoped lang="scss">
</style>