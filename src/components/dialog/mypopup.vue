<template>
  <div>
    <el-dialog
      width="300px"
      :visible.sync="dialogVisible"
      :title.sync="popTitle"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :lock-scroll="true"
      :popItems.sync="popItems"
      :commandType.sync="commandType"
      style="padding-top:120px;padding-left:100px"
    >
    <div >
      <el-input v-model="popItems" :placeholder="popItems"></el-input>
    </div>
    <div>
      <el-button style="margin-top: 10px; padding: 10px " @click="saveModify"
        >保存</el-button
      >
      <el-button style="margin-top: 10px; padding: 10px;float:right" @click="cancelModify"
        >取消</el-button
      >
    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "mypopup",
  data() {
    return {
      curreturnData: {},
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
      type: String,
      default: ""
    },
    commandType: {
      type: String,
      default: "add",
    },
  },
  methods: {
    saveModify() {
      this.$emit("recieveData", this.popItems);
      if (!this.curreturnData == "") {
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
};
</script>

<style lang="scss">
</style>