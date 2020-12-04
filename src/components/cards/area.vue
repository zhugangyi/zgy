<template>
  <div>
    <div>
      <div>
        <el-button type="success" style="padding: 7px" @click="clickAdd"
          >新增</el-button
        >
        <input
          placeholder=" 输入查找内容..."
          style="
            width: 130px;
            height: 25px;
            margin-left: 30px;
            border-radius: 3px;
            border: 1px solid #ccc;
          "
        />
        <el-button
          title="查找"
          icon="el-icon-search"
          circle
          style="padding: 4px; margin-left: 10px"
        ></el-button>
        <el-button
          title="重置"
          icon="el-icon-success"
          circle
          style="padding: 4px; margin-left: 10px"
        ></el-button>
      </div>
      <div style="margin-top:8px">
        <div>
          <el-table
            :data="areaData"
            style="border-radius: 5px"
            border=""
            :cell-style="{ padding: '6px' }"
            :header-cell-style="{ 'border-bottom': 'solid 1px #d2d3da' }"
            @row-click="getDetail"
          >
            <el-table-column
              prop="id"
              label="序号"
              align="center"
              width="80"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="区域名称"
              align="center"
              width="200"
            ></el-table-column>
            <el-table-column label="操作" align="center" width="120">
              <template slot-scope="scope">
                <el-button
                  title="修改"
                  type="primary"
                  icon="el-icon-edit"
                  circle
                  style="padding: 4px"
                  @click.native.prevent="clickModify(scope.row)"
                ></el-button>
                <el-button
                  title="删除"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  style="padding: 4px"
                  @click.native.prevent="deleteArea(scope.row)"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!--//子组件 属性dialogVisible绑定父组件数据dialogVisible（vue是数据驱动）-->
    <mypopup
      v-on:recieveData="recieveData"
      v-if="dialogVisible"
      :dialogVisible.sync="dialogVisible"
      :popTitle.sync="popTitle"
      :popItems.sync="popItems"
      :commandType.sync="commandType"
    ></mypopup>
  </div>
</template>

<script>
import mypopup from "../dialog/mypopup";
export default {
  data() {
    return {
      currentrow: [],
      area: { areaId: "", areaName: "" },
      areaData: [],
      dialogVisible: false,
      popTitle: "",
      popItems: "",
      returnData: "",
      commandType: "",
    };
  },
  components: {
    mypopup,
  },
  methods: {
    recieveData(curreturnData) {
      this.returnData = curreturnData;
      this.area.areaName = this.returnData;
    },

    clickModify(row) {
      this.getDetail(row);
      this.popTitle = "地区编辑";
      this.commandType = "modify";
      this.popItems=this.area.areaName;
      this.dialogVisible = true;
    },
    clickAdd() {
      this.popTitle = "地区新增";
      this.commandType = "add";
      this.popItems = [];
      this.dialogVisible = true;
    },
    listArea() {
      var param = []
      this.$http.get("Area/list").then((resp) => {
        if (resp) {
          this.areaData = resp.data;
        }
      });
    },
    getDetail(row) {
      this.area.areaId = row.areaId;
      this.area.areaName = row.areaName;
    },
    deleteArea(row) {
      this.getDetail(row);
      if (!window.confirm("确定删除地区 " + this.area.areaName)) {
        return;
      }
      var param = { areaId: this.area.areaId, areaName: "" };
      this.$http.delete("Area/delete", { data: param }).then((resp) => {
        if (resp) {
          alert("删除成功");
          this.listArea();
        } else {
          alert("删除失败");
        }
      });
    },

    modify() {
      this.$http.put("Area/update", this.area).then((resp) => {
        if (resp) {
          alert("修改成功");
          this.listArea();
        }
      });
    },
    insert() {
      this.$http.post("Area/insert", this.area).then((resp) => {
        if (resp) {
          alert("新增成功");
          this.listArea();
        }
      });
    },
  },
  mounted() {
    this.listArea();
  },
};
</script>

<style scoped>
.el-button--primary {
  padding: 7px;
}
.el-button--warning {
  border: 1px;
  padding: 3px;
}
.el-button--danger {
  border: 1px;
  padding: 3px;
}
</style>