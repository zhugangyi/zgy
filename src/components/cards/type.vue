<template>
  <div>
    <div>
      <div>
        <el-button>新增</el-button>
        <el-button>修改</el-button>
        <el-button>保存</el-button>
        <el-button>删除</el-button>
        <el-button>取消</el-button>
      </div>
      <br />
      <div>
        <div>
          <el-table
            :data="tableData"
            style="border-radius: 5px"
            border=""
            :cell-style="{padding: '6px'}"
            :header-cell-style="{ 'border-bottom': 'solid 1px #d2d3da' }"
          >
            <el-table-column width="48">
              <template>
                <el-checkbox></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column
              prop="id"
              label="序号"
              align="center"
              width="80"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="资产类型"
              align="center"
              width="200"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "写字楼",
        },
        {
          id: 2,
          name: "商铺",
        },
        {
          id: 3,
          name: "住宅",
        },
        {
          id: 4,
          name: "厂房",
        },
        {
          id: 5,
          name: "危房",
        },
      ],
    };
  },
};
</script>