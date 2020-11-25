<template>
  <div>
    <div>
      <div style="display: flex;justify-content: space-between">
      <div>
          <el-table>
            <el-table-column prop="id" label="序号" width="60" />
            <el-table-column prop="mc" label="公司名称" width="250" />
            <el-table-column prop="jh" label="生产线" width="100" />
            <el-table-column prop="zhgx" label="最后更新时间" width="250" />
          </el-table>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      beiruike: []
    };
  },

  methods: {
    getcjd() {
      //alert("dasfds"),
      this.loading = true;
      this.$http.get("/Cjd/ListCjd").then(resp => {
        if (resp) {
          (this.beiruike = resp.data), alert("shoudao");
        } else {
          this.loading = false;
          this.showMsg = true;
        }
      });
    }
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
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    asideWidth() {
      return this.$store.state.isCollapse ? "auto" : "200px";
    }
  }
};
</script>

<style lang="scss">
.index-box {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .el-container {
    height: 100%;
    .el-main {
      height: 100%;
    }
  }
  .el-aside {
    background-color: #20222a;
    height: 100vh;
    min-height: 100%;
    .logo {
      background-color: #20222a;
      color: rgba(255, 255, 255, 0.8);
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
