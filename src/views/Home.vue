<template>
  <div>
    <div class="header">
      <Headers />
    </div>
    <div class="navbar">
      <Menus :isCollapse="isCollapse" />
    </div>

    <div class="main">

          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="height: 20px;"
            v-if="this.$router.currentRoute.path != '/'"
          >
            <el-breadcrumb-item :to="{ path: '/home' }"
              >资产管理系统</el-breadcrumb-item
            >
            <el-breadcrumb-item>{{
              this.$router.currentRoute.name
            }}</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- <div
            class="homeWelcome"
            v-if="this.$router.currentRoute.path == '/home'"
            style="height: 600px; width: 600px"
          >
          </div> -->
          <keep-alive v-if="$route.meta.keepAlive">
            <router-view></router-view>
          </keep-alive>
          <route-view v-if="!$route.meta.keepAlive"></route-view>

    </div>
  </div>
</template>

<script>
import Menus from "@/components/menus/menus";
import Headers from "@/components/header/header";
import { parseTime } from "@/utils/setMethods";
import { json2excel } from "@/utils/setMethods";
import { formatJson } from "@/utils/setMethods";
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
      tableDataExcel: [
        {
          a: "1",
          b: "测试团队",
          c: "213",
          d: "213",
          e: "213",
          f: "213",
          g: "213",
          h: "213",
          i: "213",
          j: "213",
          k: "213",
          l: "213",
          m: "213",
          n: "213",
          o: "213",
          p: "213",
        },
      ],
      headVal: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
      ],
    };
  },
  components: {
    Menus,
    Headers,
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },

    handleDownloadExcel() {
      // this.downloadLoading = true
      import("@/vendor/Export2Excel").then((excel) => {
        const multiHeader = [
          [
            "序号",
            "旅行社",
            "国内（温台意外）",
            "",
            "",
            "",
            "",
            "",
            "",
            "境外（含港澳台）",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
        ];
        const multiHeader2 = [
          [
            "",
            "",
            "门票消费金额",
            "A类(张)",
            "",
            "B类(张)",
            "",
            "C类(张)",
            "",
            "门票消费金额",
            "D类(张)",
            "",
            "E类(张)",
            "",
            "F类(张)",
            "",
          ],
        ];
        const header = [
          [
            "",
            "",
            "",
            "全票",
            "半价",
            "全票",
            "半价",
            "全票",
            "半价",
            "",
            "全票",
            "半价",
            "全票",
            "半价",
            "全票",
            "半价",
          ],
        ];
        const filterVal = this.headVal;
        let list = [];
        list = this.tableDataExcel;
        var myhead = new Array();

        // if (this.tableDataExcelType == 0) {
        //   list = this.tableDataExcel;
        // } else {
        //   list = this.tableDataExcelAll;
        // }

        const data = this.formatJson(filterVal, list);
        //进行所有表头的单元格合并，建议一行一行来，不然容易整乱
        const merges = [
          "A1:A3",
          "B1:B3",
          "C1:I1",
          "J1:P1",
          "C2:C3",
          "D2:E2",
          "F2:G2",
          "H2:I2",
          "J2:J3",
          "K2:L2",
          "M2:N2",
          "O2:P2",
        ];
        //  const merges = ['A1:A2', 'B1:B2', 'C1:I2','J1:P2']

        excel.export_json_to_excel({
          multiHeader, //这里是第一行的表头
          header, //这里应该是算第三行的表头
          data,
          merges,
          filename: "测试数据",
          sheetname: "test",
          autoWidth: true,
          bookType: "xlsx",
        });
        // this.downloadLoading = false
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    asideWidth() {
      return this.$store.state.isCollapse ? "auto" : "200px";
    },
  },
};
</script>

<style lang="scss">
/* 头部样式 */
.header {
  position: absolute;
  line-height: 80px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #2d3a4b;
  background: url("../assets/topbg.jpg");
}

/* 左侧样式 */
.navbar {
  position: absolute;
  width: 200px;
  top: 80px; /* 距离上面50像素 */
  left: 0px;
  bottom: 0px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  background-color: #20222A;
}

/* 主区域 */
.main {
  position: absolute;
  top: 80px;
  left: 230px;
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  padding: 10px;
  // background: url('../assets/images/bg.jpg');
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  /* background-color: red; */
}
.homeWelcome {
  left: 10px;
  width: 100%;
  height: 100%;
}
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
