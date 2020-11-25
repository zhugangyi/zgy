<template>
  <div>
    <el-row>
      <el-col>
        <el-form style="display: flex; justify-content: space-between">
          <el-form-item
            label="资产列表:"
            style="display: flex; justify-content: left"
          >
            <el-select
              placeholder="资产类型"
              v-model="condition.type"
              clearable
              style="width: 200px; margin-right: 10px"
            >
              <el-option
                v-for="item in assetType"
                :key="item.value"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
            <el-input
              clearable
              placeholder="资产名称"
              v-model="condition.name"
              style="width: 200px; margin-right: 10px"
            >
            </el-input>
            <el-input
              placeholder="资产地址"
              clearable
              v-model="condition.address"
              style="width: 200px; margin-right: 11px"
            >
            </el-input>
            <el-button @click="assetsList" style="padding: 11px"
              >查询</el-button
            >
            <el-button style="padding: 10px">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div>
      <el-button type="primary" icon="el-icon-circle-plus" style="padding: 5px">
        新增
      </el-button>
      <el-button type="warning" icon="el-icon-share" style="padding: 5px"
        >资产拆分</el-button
      >
    </div>
    <div style="margin-top: 20px">
      <el-table
        :data="assetsTable"
        style="border-radius: 5px"
        :row-style="{ height: '15px' }"
        :cell-style="{ padding: '4px' }"
        border=""
        :header-cell-style="{ 'border-bottom': 'solid 1px #d2d3da' }"
      >
        <!-- <el-table-column
          prop="id"
          label="序号"
          align="center"
          width="50"
        ></el-table-column> -->
        <el-table-column label="序号" type="index" width="50" align="center">
          <template slot-scope="scope">
            <span v-text="getIndex(scope.$index)"> </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          align="center"
          width="235"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center"
          width="235"
        ></el-table-column>
        <el-table-column
          prop="area"
          label="区域"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="proportion"
          label="面积"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="assetstatus"
          label="资产状态"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="assettype"
          label="资产类型"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="comment"
          label="详细描述"
          align="center"
          width="400"
        ></el-table-column>
        <el-table-column prop="pic" label="图片" align="center" width="55">
          <template>
            <el-button
              plain
              title="查看"
              type="warning"
              icon="el-icon-picture"
              circle
              style="padding: 4px"
              @click="modifyPictures"
            ></el-button> </template
        ></el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template>
            <el-button
              title="修改"
              type="primary"
              icon="el-icon-edit"
              circle
              style="padding: 4px"
            ></el-button>
            <el-button
              title="删除"
              type="danger"
              icon="el-icon-delete"
              circle
              style="padding: 4px"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pictures
        v-if="dialogVisible"
        :dialogVisible.sync="dialogVisible"
        :popTitle.sync="popTitle"
      />
    </div>
    <div class="mainPage">
      <Pager v-on:changePage="changePage" :total="total" />
    </div>
  </div>
</template>

<script>
import uitls from "../utils/utils";
import Pager from "@/components/pager";
import pagesVue from "../components/pages.vue";
import Pictures from "../components/pictures.vue";

export default {
  data() {
    return {
      totalPage: 5,
      value: "",
      assetsTable: [],
      assetType: [],
      condition: { type: "", name: "", address: "", pageNum: 1, pageSize: 5 },
      dialogVisible: false, //显示对话框
      curPage: 1, //当前页
      total: 0, //总共页数
      pageSize: 5, //每页记录数
      pageNum: 1, //第一页
      dataChanged: false,
      allpage: 14, //总记录数
      size: 10, //每页显示个数
      current: 1, //当前显示页
      popTitle:"资产管理",//弹出窗口抬头
    };
  },

  components: {
    Pager,
    Pictures,
  },

  methods: {
    modifyPictures() {
      this.dialogVisible = true;
    },
    getIndex($index) {
      //表格序号
      return (
        (this.condition.pageNum - 1) * this.condition.pageSize + $index + 1
      );
    },
    assetsList() {
      // this.condition.pageNum = this.curPage;
      // this.condition.pageSize = this.pageSize;
      var param = this.condition;
      this.$http
        .get("Assets/selectByExample", { params: param })
        .then((resp) => {
          if (resp) {
            this.assetsTable = resp.data.list;
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
      this.assetsList();
    },

    getAssetType() {
      this.$http.get("/AssetType/AssetTypeList").then((resp) => {
        if (resp) {
          this.assetType = resp.data;
        }
      });
    },
  },

  mounted() {
    this.getAssetType();
    this.assetsList();
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