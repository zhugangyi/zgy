<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo.png" alt="ELementUI" width="122" height="40" left=20px />
      <el-menu
        class="menu-nav"
        router
        :default-active="currentPath"
        background-color="#20222A"
        text-color="rgba(255,255,255,.8)"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
      >
        <el-menu-item index="/welcome">
          <i class="el-icon-location"></i>
          <span slot="title">资产概况</span>
        </el-menu-item>
        <el-menu-item index="/zichanguanli">
          <i class="el-icon-location"></i>
          <span slot="title">资产管理</span>
        </el-menu-item>
        <el-menu-item index="/hetong">
          <i class="el-icon-menu"></i>
          <span slot="title">合同管理</span>
        </el-menu-item>
        <el-menu-item index="/caiwu">
          <i class="el-icon-menu"></i>
          <span slot="title">财务管理</span>
        </el-menu-item>
        <el-menu-item index="/reportechart">
          <i class="el-icon-menu"></i>
          <span slot="title">图表报表</span>
        </el-menu-item>
        <el-menu-item index="/settings">
          <i class="el-icon-menu"></i>
          <span slot="title">基本信息</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-share"></i>
          <span slot="title">关于</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      currentPath: location.pathname,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
.menu-nav:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
