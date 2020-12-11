<template>
  <div>
    <el-dialog
      width="300px"
      :visible.sync="dialogVisible"
      :title="popTitle"
      :ParentName.sync="parentName"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :lock-scroll="true"
      :id.sync="id"
      :name.sync="name"
      :addUrl.sync="addUrl"
      :modifyUrl.sync="modifyUrl"
      :commandType.sync="commandType"
      style="padding-top: 120px; padding-left: 100px"
    >
      <div>
        <el-input v-model="editName" :placeholder="'请输入'+parentName+'名称'"></el-input>
      </div>
      <div>
        <el-button style="margin-top: 10px; padding: 10px" @click="saveModify"
          >保存</el-button
        >
        <el-button
          style="margin-top: 10px; padding: 10px; float: right"
          @click="cancelModify"
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
      popTitle: "",
      editName: "",
    };
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
    addUrl: {
      type: String,
      default: "",
    },
    modifyUrl: {
      type: String,
      default: "",
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    parentName: {
      type: String,
      default: ""
    },
    commandType: {
      type: String,
      default: "",
    },
  },
  methods: {
    saveModify() {
        if (this.commandType == "add") {
          this.insert();
        } else {
          this.modify();
        }
      this.$emit("update:dialogVisible", false);
    },

    modify() {
      this.$http.put(this.modifyUrl, {id:this.id,name:this.editName}).then((resp) => {
        if (resp) {
          this.$message.success("修改成功")
          this.$parent.list();
        }
      });
    },
    insert() {
      //area.id 自增 赋空值
      this.$http.post(this.addUrl, {id:null,name:this.editName}).then((resp) => {
        if (resp) {
          this.$message.success("新增成功");
          this.$parent.list();
        }
      });
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

    //初始化属性 把属性传递给变量
    initProps() {
      this.editName = this.name;
      if(this.commandType=="add"){
        this.popTitle=this.parentName+"新增"
      }else{
        this.popTitle=this.parentName+"修改"
      }
    },
  },
  mounted() {
    this.initProps();
  },
};
</script>

<style lang="scss">
</style>