<template>
  <div class="params">
    <el-row :gutter="20">
      <el-col :span="24">
        <ParamsForm></ParamsForm>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Console></Console>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Console from '@/components/GeneralCmp/Console.vue'
import ParamsForm from '@/components/ParamsPage/ParamsForm.vue'

export default {
  name: 'ParamsSet',
  components: {
    ParamsForm,
    Console
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
