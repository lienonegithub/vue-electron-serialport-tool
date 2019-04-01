<template>
  <div id="ParamsForm">
    <el-row>
      <el-col :span="24">
        <!-- 参数设置 -->
        <el-card class="box-card"
                 shadow="always">
          <div slot="header"
               class="clearfix">
            <span>
              <i class="el-icon-setting"></i>
              参数设置
            </span>
            <el-button style="float: right; padding: 3px 0;color: #909399"
                       type="text">重置</el-button>
          </div>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form ref="form"
                       :model="form"
                       label-width="80px">

                <el-form-item label="设备型号">
                  <el-select v-model="form.region"
                             placeholder="请选择型号">
                    <el-option label="XH-01"
                               value="XH-02"></el-option>
                    <el-option label="XH-03"
                               value="XH-03"></el-option>
                  </el-select>
                </el-form-item>
                <ProgressBar v-if="isStart"
                             :progressOpts="progressOpts"></ProgressBar>
                <el-form-item>
                  <el-button type="primary"
                             @click="onSubmit"
                             :disabled="isDisable">立即发送</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="16">
              <el-form :inline="true"
                       :model="formInline"
                       class="demo-form-inline">
                <el-form-item label="参数1">
                  <el-input v-model="formInline.user"
                            placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="参数2">
                  <el-input v-model="formInline.user"
                            placeholder=""></el-input>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ProgressBar from '@/components/GeneralCmp/ProgressBar.vue'

export default {
  name: 'ParamsForm',
  components: {
    ProgressBar
  },
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      isDisable: true,
      isStart: false,
      progressOpts: {
        percentage: Number,
      }
    }
  },
  computed: {
    percentage () {
      return 100
    }
  },
  methods: {
    onSubmit () {
      this.isStart = true
      console.log('submit!');
    }
  }
}
</script>
<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>