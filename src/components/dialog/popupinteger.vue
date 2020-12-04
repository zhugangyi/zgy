<template>
  <div>
    <el-dialog
      width="320px"
      :visible.sync="dialogVisible"
      :title.sync="popTitle"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :lock-scroll="true"
      :popItems.sync="popItems"
      :commandType.sync="commandType"
      style="padding-top: 50px; padding-left: 100px"
    >
      <div v-for="item in popItems" :key="item.index">
        <div style="margin-top: 8px">
          <label>{{ item.labelname }}</label>
          <el-input
            :ref="item.fieldname"
            v-if="(item.labelname == '积分')"
            style="width: 200px; margin-left: 8px"
            v-model="item.editname"
            :placeholder="item.editname"
          ></el-input>
          <el-select
            :id="item.fieldname"
            v-model="item.editname"
            v-if="item.labelname == '地区'"
            style="width: 200px; margin-left: 8px"
            placeholder="选择地区"
          >
            <el-option
              v-for="(item, index) in area"
              :key="index"
              :label="item.areaName"
              :value="item.areaName"
            >
            </el-option>
          </el-select>
          <el-select
            :id="item.fieldname"
            v-model="item.editname"
            v-if="item.labelname == '类型'"
            style="width: 200px; margin-left: 8px"
            placeholder="选择类型"
          >
            <el-option
              v-for="(item, index) in dispatchtype"
              :key="index"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <el-button style="margin-top: 10px; padding: 10px" @click="saveModify"
        >保存</el-button
      >
      <el-button
        style="margin-top: 10px; padding: 10px; float: right"
        @click="cancelModify"
        >取消</el-button
      >
    </el-dialog>
  </div>
</template>

<script>
// import ListSettings from "../../utils/listSettings";
export default {
  name: "popupemployee",
  data() {
    return {
      curreturnData: {
          area:"",
          dispatchtype:"",
          num:0
      },
      area: [],
      dispatchtype:[],
    };
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    popTitle: {
      type: String,
      default: "",
    },
    popItems: {
      type: Array,
      default: () => {
        return [];
      },
    },
    commandType: {
      type: String,
      default: "add",
    },
  },
  methods: {
    saveModify() {
      this.curreturnData = this.popItems.map((item) => item.editname);
      this.$emit("recieveData", this.curreturnData);
      if (!this.popItems == "") {
        if (this.commandType == "add") {
          this.$parent.insert();
        } else {
          this.$parent.modify();
        }
      }
      this.$emit("update:dialogVisible", false);
    },
    cancelModify() {
      this.$emit("update:dialogVisible", false);
    },
    handleClose() {
      this.$emit("update:dialogVisible", false);
    },
    onsubmit() {
      console.log("submit");
    },
  },
  mounted() {
    this.$http.get("Area/listArea").then((resp) => {
      if (resp) {
        this.area = resp.data;
        console.log(this.area)
      }
    });
    this.$http.get("DispatchType/list").then((resp) => {
      if (resp) {
        this.dispatchtype = resp.data;
        console.log(this.dispatchtype)
      }
    });
    // console.log(this.dep)
  },
};
</script>

<style lang="scss">
</style>