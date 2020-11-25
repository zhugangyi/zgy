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
        prop="startDate"
        label="起始日期"
        align="center"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="endDate"
        label="结束日期"
        align="center"
        width="150"
      ></el-table-column>
            <el-table-column
        prop="zujin"
        label="租金(万元)"
        align="center"
        width="150"
      ></el-table-column>
      <el-table-column label="操作" align="center" width="280">
        <template>
          <el-button>查看</el-button>
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
          startDate: "2019-01-01",
          endDate: "2012-01-01",
          zujin: "3.5",
        },
        {
          id: 2,
          name: "合同20190101002",
          zichan: "北斗北路38号",
          chenzu: "麦当劳",
          startDate: "2019-01-01",
          endDate: "2015-01-01",
          zujin: "34",
        },
        {
          id: 3,
          name: "合同20200405002",
          zichan: "时代大道8号",
          chenzu: "金话筒播音主持学校",
          startDate: "2020-08-08",
          endDate: "2025-08-07",
          zujin: "50",
        },
        {
          id: 4,
          name: "合同20200405002",
          zichan: "环球中心3-12",
          chenzu: "昊祥软件",
          startDate: "2020-04-05",
          endDate: "2030-10-04",
          zujin: "80",
        },
        {
          id: 5,
          name: "合同20200405002号",
          zichan: "宁波银行17-7",
          chenzu: "昊翔电脑",
          startDate: "2020-01-08",
          endDate: "2030-09-09",
          zujin: "68",
        },
        {
          id: 6,
          name: "合同202000707002号",
          zichan: "宁波银行17-6",
          chenzu: "太平保险",
          startDate: "2009-01-01",
          endDate: "2030-06-06",
          zujin: "100",
        },
      ],
    };
  },
};
</script>

<style>
</style>
