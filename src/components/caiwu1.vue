/* eslint-disable */
<template>
  <div>
    <el-table
      :data="tableData"
      style="border-radius: 5px"
      border=""
      :header-cell-style="{ 'border-bottom': 'solid 1px #d2d3da' }"
    >
      <el-table-column
        prop="id"
        label="序号"
        align="center"
        width="50"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="合同编号"
        align="center"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="zichan"
        label="资产名称"
        align="center"
        width="300"
      ></el-table-column>
      <el-table-column
        prop="chenzu"
        label="承租方"
        align="center"
        width="300"
      ></el-table-column>
      <el-table-column
        prop="jine"
        label="合同金额"
        align="center"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="weishou"
        label="未收金额"
        align="center"
        width="150"
      ></el-table-column>
       <el-table-column label="操作" align="center" width="200">
        <template>
          <el-button>修改</el-button>
          <el-button>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
/* eslint-disable */
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "合同20190101001",
          zichan: "气象北路3号",
          chenzu: "肯德基",
          jine: "3.5",
          weishou: "1",
        },
        {
          id: 2,
          name: "合同20190101002",
          zichan: "北斗北路38号",
          chenzu: "麦当劳",
          jine: "34",
          weishou: "4",
        },
        {
          id: 3,
          name: "合同20200405002",
          zichan: "时代大道8号",
          chenzu: "金话筒播音主持学校",
          jine: "50",
          weishou: "12",
        },
        {
          id: 4,
          name: "合同20200405002",
          zichan: "环球中心3-12",
          chenzu: "昊祥软件",
          jine: "80",
          weishou: "40",
        },
        {
          id: 5,
          name: "合同20200405002号",
          zichan: "宁波银行17-7",
          chenzu: "昊翔电脑",
          jine: "68",
          weishou: "0",
        },
        {
          id: 6,
          name: "合同202000707002号",
          zichan: "宁波银行17-6",
          chenzu: "太平保险",
          jine: "100",
          weishou: "25",
        },
      ],
    };
  },
};
</script>

<style>
</style>
