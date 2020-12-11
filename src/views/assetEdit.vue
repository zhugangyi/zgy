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
          <label style="font-size: 15px">资产名称</label>
          <el-input
            v-model="assets.name"
            class="edit"
            style="width: 350px"
            size="medium"
          ></el-input>
          <label style="font-size: 15px">资产简称</label>
          <el-input
            v-model="assets.tipname"
            class="edit"
            style="width: 120px"
            size="medium"
          ></el-input>
        </div>
        <div style="margin-top: 10px; margin-left: 10px">
          <label style="font-size: 15px">区域名称</label>
          <el-select
            v-model="assets.area"
            style="width: 200px; margin-left: 8px"
            placeholder="选择地区"
          >
            <el-option v-for="(item,index) in area" :key="index" :label="item.name" :value="item.name">
              
            </el-option>
          </el-select>
          <!-- <el-input
            v-model="assets.area"
            class="edit"
            style="width: 200px"
            size="medium"
          ></el-input> -->
          <label style="font-size: 15px">资产面积</label>
          <el-input
            v-model="assets.proportion"
            class="edit"
            style="width: 280px"
            size="medium"
          ></el-input>
        </div>
        <div style="margin-top: 10px; margin-left: 10px">
          <label style="font-size: 15px">资产状态</label>
          <el-input
            v-model="assets.assetstatus"
            class="edit"
            style="width: 200px"
            size="medium"
          ></el-input>
          <label style="font-size: 15px">资产类型</label>
          <el-input
            v-model="assets.assetType"
            class="edit"
            style="width: 280px"
            size="medium"
          ></el-input>
          <div>
            <label style="font-size: 15px">详细资料</label>
            <el-input
              v-model="assets.comment"
              class="edit"
              style="width: 280px"
              size="medium"
            ></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assets: {
        id: "",
        name: "",
        address: "",
        area: "",
        assettype: "",
        assetlevel: "",
        comment: "",
        coordinate: "",
        tipname: "",
        price: 0,
        proportion: "",
        assetstatus: "",
        parentId: 0,
      },
      assetType:[],
      assetstatus:[],
      area:[]
    };
  },
  //提交测试 2012-12-11
  methods: {
    reset() {
      this.assets = {
        id: "",
        name: "",
        address: "",
        area: "",
        assettype: "",
        assetlevel: "",
        comment: "",
        coordinate: "",
        tipname: "",
        price: 0,
        proportion: "",
        assetstatus: "",
        parentId: 0,
      };
    },
    clickReturn() {
      this.$router.replace({ path: "/zichanguanli" });
    },
    clickSave() {
      if (this.assets.id > 0) {
        this.$http.put("/Assets/update", this.assets).then((resp) => {
          if (resp) {
            this.$message.success("修改成功");
          }
        });
      }
      if (this.assets.id == null) {
        console.log("新增");
        this.$http.post("Assets/insert", this.assets).then((resp) => {
          if (resp) {
            this.$message.success("新增成功");
          }
        });
      }
    },
    getParams() {
      this.assets = this.$route.query;
      this.$http.get("/AssetType/list").then((resp)=>{
          if(resp){
              this.assetType = resp.data
          }
      })
      this.$http.get("/AssetStatus/list").then((resp)=>{
          if(resp){
              this.assetstatus = resp.data
          }
      })
      this.$http.get("/Area/list").then((resp)=>{
          if(resp){
              this.area = resp.data
          }
      })
    },
  },
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