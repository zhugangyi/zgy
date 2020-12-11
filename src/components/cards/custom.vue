<template>
  <div>
    <div>
      <el-button type="primary" icon="el-icon-circle-plus" style="padding: 5px" @click="clickAdd"
        >新增</el-button
      >
      <el-input
        placeholder="客户名称"
        size="mini"
        v-model="condition.name"
        clearable
        style="
          width: 150px;
          height: 15px;
          margin-right: 10px;
          margin-left: 10px;
        "
      >
      </el-input>
      <el-input
        clearable
        size="mini"
        placeholder="联系电话"
        v-model="condition.mobile"
        style="width: 150px; margin-right: 10px"
      >
      </el-input>
      <el-input
        placeholder="联系人"
        clearable
        size="mini"
        v-model="condition.linkman"
        style="width: 150px; margin-right: 11px"
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
      <el-table
        :data="tableData"
        row-key="id"
        :tree-props="{ children: 'children', hasChildren: 'hasChild' }"
        style="border-radius: 5px"
        :row-style="{ height: '15px' }"
        :cell-style="{ padding: '4px' }"
        border=""
        :header-cell-style="{ 'border-bottom': 'solid 1px #d2d3da' }"
      >
        <el-table-column label="序号" type="index" width="50" align="center">
          <template slot-scope="scope">
            <span v-text="getIndex(scope.$index)"> </span>
          </template>
        </el-table-column>

        <!--名称列 根据是否为子资产缩进显示后端排序根据parentId，assetlevel，id -->
        <el-table-column prop="name" label="名称" width="235">
        </el-table-column>
        <el-table-column
          prop="shortname"
          label="简称"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="linkman"
          label="联系人"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="mobile"
          label="联系电话"
          align="center"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="Email"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="comment"
          label="备注"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template slot-scope="scope">
            <el-button
              title="修改"
              type="primary"
              icon="el-icon-edit"
              circle
              style="padding: 4px"
              @click="clickModify(scope.row)"
            ></el-button>
            <el-button
              title="删除"
              type="danger"
              icon="el-icon-delete"
              circle
              style="padding: 4px"
              @click="deleteAsset(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mainPage">
      <Pager v-on:changePage="changePage" :total="total" />
    </div>
  </div>
</template>

<script>
import uitls from "../../utils/utils";
import Pager from "@/components/pager";

export default {
  data() {
    return {
      tableData: [],
      condition: {
        mobile: "",
        name: "",
        linkman: "",
        pageNum: 1,
        pageSize: 10,
      }, //查询条件
      total: null,
      custom: {
        id: null,
        name: "",
        shortname: "",
        linkman: "",
        email: "",
        comment: "",
      },
    };
  },

  components: {
    Pager,
  },

  methods: {

    clickModify(row) {
      this.getDetail(row);
      this.custom=row
      this.$router.push({path:"/customEdit",query:this.custom})
    },
    clickAdd() {
      this.custom={
        id: null,
        name: "",
        shortname: "",
        linkman: "",
        email: "",
        comment: "",
      }
      this.$router.push({path:"/customEdit",query:this.custom})

    },
    deleteAsset(row) {
      this.getDetail(row);
      if (
        window.confirm(
          "确定删除 " + this.custom.name + " 客户数据吗？删除后不可恢复！"
        )
      ) {
        let param = { id: this.custom.id };
        this.$http.delete("/Custom/delete", { params: param }).then((resp) => {
          if (resp.data > 0) {
            this.$message.success("删除成功");
            this.customList();
          }
        });
      } else {
        return;
      }
    },

    //获取table当前行状态
    getDetail(row) {
      this.custom = row;
    },

    getIndex($index) {
      //表格序号
      return (
        (this.condition.pageNum - 1) * this.condition.pageSize + $index + 1
      );
    },

    customList() {
      var param = this.condition;
      this.$http.get("Custom/customList", { params: param }).then((resp) => {
        if (resp) {
          this.tableData = resp.data.list;
          this.total = resp.data.total;
        }
      });
    },
    gotoPage(pageNum) {},
    changeRowNum(pageSize) {},
    changePage(pageInfo) {
      this.condition.pageNum = pageInfo.pageNum;
      this.condition.pageSize = pageInfo.pageSize;
      // console.log(this.condition)
      this.customList();
    },
  },
  mounted() {
    this.customList();
  },
};
</script>

<style scoped>
.pageTitle {
  text-align: left;
  font-size: 18px;
  font-family: 微软雅黑;
  color: #212cca;
  margin-top: 8px;
}
</style>