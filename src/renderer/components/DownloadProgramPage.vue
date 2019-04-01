<template>
  <div class="download">
    <el-row :gutter="20">
      <el-col :span="24">
        <ProgramPublish></ProgramPublish>
      </el-col>
    </el-row>
     <el-row :gutter="20">
      <el-col :span="24">
         <Console></Console>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ProgramPublish from '@/components/DownloadPage/ProgramPublish'
import Console from '@/components/GeneralCmp/Console'
export default {
  name: 'Download',
  components: {
    ProgramPublish,
    Console
  },

}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
