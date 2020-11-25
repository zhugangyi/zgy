<template>
  <el-container class="index-box">
    <el-aside width="asideWidth">
      <div class="logo">
        <img v-show="!isCollapse" src="./../assets/logo.png" alt="ELementUI" width="122" height="27">
      </div>
      <menus :isCollapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header>
        <headers/>
      </el-header>
      <el-main class="note" style="note">
        <label>HELLOWORLD</label>
        <el-table :data="beiruike">
          <el-table-column prop="date" label="序号" width="140"/>
          <el-table-column prop="name" label="公司名称" width="140"/>
          <el-table-column prop="address" label="生产线" width="140"/>
          <el-table-column prop="address" label="在线状态" width="140"/>
          <el-table-column prop="address" label="最后采集时间" width="140"/>
        </el-table>
        <!-- <router-view v-if="isRouterAlive"/> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menus from '@/components/menus/menus'
import Headers from '@/components/header/header'
export default {  
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    const tableitem ={
      date: "2018-12-12",
      name: "vue",
      address: "朱钢毅"
      };
    return {

      isRouterAlive: true,
      note:{
        backgroundImage: "url(" + require("./../assets/logo.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize:"25px auto",
        marginTop: "5px",
      },
      beiruike: Array(20).fill(tableitem)
    }
    
  },
  components: {
    Menus,
    Headers
  },
  // methods: {
  //   reload () {
  //     this.isRouterAlive = false
  //     this.$nextTick(() => {
  //       this.isRouterAlive = true
  //     })
  //   }
  // },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    },
    asideWidth () {
      return this.$store.state.isCollapse ? 'auto' : '200px'
    }
  }
}
</script>

<style lang="scss">
.index-box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .el-container{
    height: 100%;
    .el-main {
      height: 100%;
    }
  }
  .el-aside {
    background-color: #20222A;
    height: 100vh;
    min-height: 100%;
    .logo {
      background-color: #20222A;
      color: rgba(255,255,255,.8);
      text-align: center;
      height: 60px;
      padding-top: 16px;
      font-size: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid gray;
    }
  }
  .el-header {
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    background-color: #fff;
    line-height: 60px;
  }
}
</style>
