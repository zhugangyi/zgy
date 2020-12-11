<template>
  <div>
    <div>
      <div>
        <el-button type="primary" icon="el-icon-circle-plus" style="padding: 5px" @click="clickAdd"
          >新增</el-button
        >
        <el-input
          clearable
          size="mini"
          placeholder="联系电话"
          v-model="condition"
          style="width: 150px; margin-right: 10px;margin-left: 10px;"
        >
        </el-input>
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
      <div style="margin-top: 8px">
        <div>
          <el-table
            :data="tableData"
            style="border-radius: 5px"
            border=""
            :cell-style="{ padding: '6px' }"
            :header-cell-style="{ 'border-bottom': 'solid 1px #d2d3da' }"
            @row-click="getDetail"
          >
            <el-table-column
              label="序号"
              type="index"
              width="50"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="资产状态"
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
    <Mypopup
      v-if="dialogVisible"
      :dialogVisible.sync="dialogVisible"
      :commandType.sync="commandType"
      :id.sync="id"
      :name.sync="name"
      :addUrl.sync="addUrl"
      :modifyUrl.sync="modifyUrl"
      :parentName.sync="parentName"
    ></Mypopup>
  </div>
</template>

<script>
import Mypopup from "../dialog/mypopup";
export default {
  data() {
    return {
      dialogVisible: false,
      popTitle: "",
      popItems: "",
      returnData: "",
      commandType: "",
      id: 0,
      name: "",
      addUrl: "/AssetStatus/insert",
      modifyUrl: "/AssetStatus/update",
      tableData: [],
      parentName: "资产状态",
      needRefresh: true,
      condition:""
    };
  },
  components: {
    Mypopup,
  },
  methods: {
    clickModify(row) {
      this.getDetail(row);
      this.commandType = "modify";
      this.dialogVisible = true;
    },
    clickAdd() {
      this.name = "";
      this.commandType = "add";
      this.dialogVisible = true;
    },
    list() {
      this.$http.get("AssetStatus/list").then((resp) => {
        if (resp) {
          this.tableData = resp.data;
        }
      });
    },
    getDetail(row) {
      this.id = row.id;
      this.name = row.name;
    },
    deleteArea(row) {
      this.getDetail(row);
      if (!window.confirm("确定删除资产状态 " + this.name)) {
        return;
      }
      var param = { id: this.id, name: "" };
      this.$http.delete("AssetStatus/delete", { params: param }).then((resp) => {
        if (resp) {
          this.$message.success("删除成功");
          this.list();
        } else {
          this.$message.error("删除失败");
        }
      });
    },
  },

  mounted() {
    this.list();
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