<template>
  <div>
    <div>
      <div>
        <el-button type="success" style="padding: 7px" @click="clickSave"
          >保存</el-button
        >
        <el-button
          type="success"
          style="padding: 7px; margin-left: 10px"
          @click="reset"
          >清空</el-button
        >
        <el-button
          type="success"
          style="padding: 7px; margin-left: 10px"
          @click="clickReturn"
          >返回</el-button
        >
        <label style="margin-left: 100px">客户资料编辑</label>
      </div>
      <div style="margin-top: 20px">
        <div style="margin-top: 20px; margin-left: 10px">
          <label style="font-size: 15px">客户名称</label>
          <el-input
            v-model="custom.name"
            class="edit"
            style="width: 350px"
            size="medium"
          ></el-input>
          <label style="font-size: 15px">客户简称</label>
          <el-input
            v-model="custom.shortname"
            class="edit"
            style="width: 120px"
            size="medium"
          ></el-input>
        </div>
        <div style="margin-top: 10px; margin-left: 10px">
          <label style="font-size: 15px">联系人  </label>
          <el-input
            v-model="custom.linkman"
            class="edit"
            style="width: 200px"
            size="medium"
          ></el-input>
          <label style="font-size: 15px">联系电话</label>
          <el-input
            v-model="custom.mobile"
            class="edit"
            style="width: 280px"
            size="medium"
          ></el-input>
        </div>
        <div style="margin-top: 10px; margin-left: 10px">
          <label style="font-size: 15px">E_mail  </label>
          <el-input
            v-model="custom.email"
            class="edit"
            style="width: 200px"
            size="medium"
          ></el-input>
          <label style="font-size: 15px">其他备注</label>
          <el-input
            v-model="custom.comment"
            class="edit"
            style="width: 280px"
            size="medium"
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      custom: {
        id: null,
        name: "",
        shortname: "",
        linkman: "",
        email: "",
        comment: "",
      },
    };
  },
  methods: {
    reset() {
      this.custom = {
        id: null,
        name: "",
        shortname: "",
        linkman: "",
        email: "",
        comment: "",
      };
    },
    clickReturn() {
      this.$router.replace({ path: "/custom" });
    },
    clickSave() {
      if (this.custom.id > 0) {
        this.$http.put("/Custom/update", this.custom).then((resp) => {
          if (resp) {
            this.$message.success("修改成功");
          }
        });
      }
      if (this.custom.id == null) {
        console.log("新增");
        this.$http.post("Custom/insert", this.custom).then((resp) => {
          if (resp) {
            this.$message.success("新增成功");
          }
        });
      }
    },
    getParams() {
      this.custom = this.$route.query;
    },
  },
  mounted() {},
  created() {
    this.getParams();
  },
};
</script>

<style lang="scss" scoped>
.edit {
  // margin-left: 10px;
  padding: 5px;
  font-size: 12;
}
.el-button--primary {
  padding: 7px;
}
.el-button--warning {
  border: 1px;
  padding: 3px;
}
.el-button--danger {
  border: 1px;
  padding: 3px;
}
</style>