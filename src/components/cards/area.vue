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
              label="区域名称"
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
          name: "跃龙街道",
        },
        {
          id: 2,
          name: "桃源街道",
        },
        {
          id: 3,
          name: "梅林街道",
        },
        {
          id: 4,
          name: "桥头胡街道",
        },
        {
          id: 5,
          name: "西店镇",
        },
        {
          id: 6,
          name: "岔路镇",
        },
        {
          id: 7,
          name: "黄坛镇",
        },
        {
          id: 8,
          name: "岔路镇",
        },
        {
          id: 9,
          name: "一市镇",
        },
        {
          id: 10,
          name: "峡山镇",
        },
        {
          id: 11,
          name: "大佳何镇",
        },
        {
          id: 12,
          name: "茶院乡",
        },
        {
          id: 13,
          name: "胡陈乡",
        },
        {
          id: 14,
          name: "力洋镇",
        },
        {
          id: 15,
          name: "桑洲镇",
        },
        {
          id: 16,
          name: "长街镇",
        },
        {
          id: 17,
          name: "越溪乡",
        },
        {
          id: 18,
          name: "前童镇",
        },
      ],
    };
  },
};
</script>