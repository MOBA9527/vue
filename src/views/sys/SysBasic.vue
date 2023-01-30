<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="部门管理" name="DepMana">部门管理</el-tab-pane>
      <el-tab-pane label="职位管理" name="PosMana">职位管理</el-tab-pane>
      <el-tab-pane label="职称管理" name="JoblebelMana">职称管理</el-tab-pane>
      <el-tab-pane label="奖惩规则" name="EcMana">奖惩规则</el-tab-pane>
      <el-tab-pane label="权限组" name="PermissMana">权限组</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import DepMana from '../../components/sys/basick/DepMana'
import EcMana from '../../components/sys/basick/EcMana'
import JoblebelMana from '../../components/sys/basick/JoblebelMana'
import PermissMana from '../../components/sys/basick/PermissMana'
import PosMana from '../../components/sys/basick/PosMana'

export default {
  name: "SysBasic",
  data() {
    return {
      activeName: "DepMana",
    };
  },
  components:{
    DepMana,
    EcMana,
    PermissMana,
    JoblebelMana,
    PosMana
  }
};
</script>
<style scoped>
</style>