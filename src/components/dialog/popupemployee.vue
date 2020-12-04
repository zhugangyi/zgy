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
            v-if="
              (item.labelname != '出生日期') & (item.labelname != '员工照片') & (item.labelname != '所属部门')
            "
            style="width: 200px; margin-left: 8px"
            v-model="item.editname"
            :placeholder="item.editname"
          ></el-input>
          <el-date-picker
            :id="item.fieldname"
            v-model="item.editname"
            v-if="item.labelname == '出生日期'"
            style="width: 200px; margin-left: 8px"
            placeholder="选择日期"
          ></el-date-picker>
          <el-select
            :id="item.fieldname"
            v-model="item.editname"
            v-if="item.labelname == '所属部门'"
            style="width: 200px; margin-left: 8px"
            placeholder="选择部门"
          >
            <el-option v-for="(item,index) in dep" :key="index" :label="item.name" :value="item.name">
              
            </el-option>
          </el-select>
          <!--照片上传功能 -->
          <!-- <el-uploader
            v-if="item.labelname == '员工照片'"
            action="/mgr/common/imgUpload"
            list-type="picture-card"
            accept="image/*"
            :limit="imgLimit"
            :file-list="productImgs"
            :multiple="isMultiple"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-exceed="handleExceed"
            :on-error="imgUploadError"
            style="margin-left:8px"
          >
            <i class="el-icon-plus"></i>
            ></el-uploader -->
        </div>
      </div>

      <el-button style="margin-top: 10px; padding: 10px" @click="saveModify"
        >保存</el-button
      >
      <el-button style="margin-top: 10px; padding: 10px;float:right" @click="cancelModify"
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
        jobid: "",
        name: "",
        mobile: "",
        address: "",
        certifyid: "",
        birthday: "",
        dep: "",
        school: "",
      },
      dep: [],
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
    console.log(this.popItems)
    this.$http.get("Dep/list").then((resp) => {
      if (resp) {
        this.dep = resp.data;
      }
    });
    console.log(this.dep)
  },
};
</script>

<style lang="scss">
</style>