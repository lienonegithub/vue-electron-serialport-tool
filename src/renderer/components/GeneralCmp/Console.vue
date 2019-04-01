<template>
  <div id="Console">
    <el-card class="box-card"
             :body-style="{ height: '85%' }"
             shadow="hover">
      <div slot="header"
           class="clearfix">
        <span>
          <i class="el-icon-arrow-right"></i>
          Console
        </span>
        <el-button style="float: right; padding: 3px 0;color:#606266;"
                   type="text"
                   icon="el-icon-delete"
                   @click="clearInfo">清空</el-button>
      </div>

      <el-scrollbar style="height:100%"
                    :native="false"
                    wrapStyle=""
                    wrapClass=""
                    viewClass=""
                    viewStyle="">

        <p v-for="(item,index) in getInfoList"
           :key="index"
           class="rcvinfo"
           v-html="item">
        </p>
      </el-scrollbar>

    </el-card>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Console',
  props: {

  },
  data () {
    return {
      infoList: []
    }
  },
  computed: {
    ...mapGetters({
      getInfoList: 'getInfoList'
    })
  },
  watch: {
    info: function () {

    }
  },
  methods: {
    ...mapActions({
      clearInfo: 'clearInfo'
    })
  }
}
</script>
<style scoped>
.item {
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.el-card {
  height: 400px;
}

.rcvinfo {
  font-size: 0.8rem;
}
.rcvinfo >>> .time {
  color: #909399;
}
.rcvinfo >>> .info-err {
  background: #fde2e2;
  color: #f56c6c;
  margin: 0 0.5rem;
}
.rcvinfo >>> .info-ok {
  background: #e1f3d8;
  color: #67c23a;
  margin: 0 0.5rem;
}
.rcvinfo >>> .info-msg {
  background: #c0c4cc;
  color: #303133;
  margin: 0 0.5rem;
}
</style>
