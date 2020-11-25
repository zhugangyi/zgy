<template>
  <div>
    <el-row>
      <el-col>
        <el-form style="display: flex; justify-content: space-between">
          <el-form-item
            label="合同列表:"
            style="display: flex; justify-content: left"
          >
            <el-select
              placeholder="租户名称"
              v-model="value"
              style="width: 200px; margin-right: 10px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              placeholder="资产名称"
              v-model="zcvalue"
              style="width: 200px; margin-right: 10px"
            >
              <el-option
                v-for="item in zcoptions"
                :key="item.zcvalue"
                :label="item.label"
                :value="item.zcvalue"
              >
              </el-option>
            </el-select>
            <el-input
              placeholder="合同名称"
              style="width: 200px; margin-right: 10px"
            >
            </el-input>
            <el-button>查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div>
      <el-button> 新增 </el-button>
      <el-button>查看收款过程</el-button>
    </div>
    <div style="margin-top: 20px">
      <Caiwu1 />
    </div>
  </div>
</template>

<script>
import Caiwu1 from "@/components/caiwu1";

export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "麦当劳",
        },
        {
          value: "选项2",
          label: "肯德基",
        },
        {
          value: "选项3",
          label: "昊祥软件",
        },
        {
          value: "选项4",
          label: "金话筒播音主持学校",
        },
        {
          value: "选项5",
          label: "腾翔电脑",
        },
      ],
      zcoptions: [
        {
          value: "选项1",
          label: "气象北路3号",
        },
        {
          value: "选项2",
          label: "北斗北路3号",
        },
        {
          value: "选项3",
          label: "时代大道8号",
        },
        {
          value: "选项4",
          label: "环球中心3号",
        },
        {
          value: "选项5",
          label: "宁波银行17-1楼",
        },
        {
          value: "选项6",
          label: "宁波银行17-2楼",
        },
      ],
      value: "",
      zcvalue: "",
    };
  },
  components: {
    Caiwu1,
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