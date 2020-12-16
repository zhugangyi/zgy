<template>
  <div>
    <el-dialog
      width="1000px"
      :visible.sync="dialogVisible"
      :title.sync="popTitle"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :lock-scroll="true"
      :belongtotable.sync="belongtotable"
      :belongtoid.sync="belongtoid"
      style="padding-top: 120px; padding-left: 100px"
    >
      <div>
        <el-row>
          <el-col :span="6" v-for="(item, index) in imgList" :key="index">
            <div style="padding: 8px">
              <el-card :body-style="{ padding: '15px' }">
                <div slot="header" class="clearfix">
                  <span>{{ item.imgurl }}</span>
                    <el-button
                      :id="item.id"
                      title="删除"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      style="padding: 4px; float: right"
                      @click="deleteImg($event)"
                    ></el-button>
                </div>
                <viewer :image="imgList">
                  <img
                    :src="getImgUrl(item.imgurl)"
                    style="width: 160px; height: 120px"
                    :alt="item.imgurl"
                  />
                </viewer>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-button @click="uploadToDatabase">上传</el-button>
        <el-upload
          ref="imgUpload"
          :on-success="addPicsData"
          :on-remove="handleRemove"
          accept="image/gif,image/jpeg,image/jpg,image/png"
          :file-list="fileList"
          :action="uploadUrl"
          :auto-upload="false"

          multiple
        >
          <!-- // :on-preview="handlePreview"         :after-upload="selectPics" -->
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
          <el-button
            style="margin-left: 10px"
            size="small"
            type="success"
            @click="submitUpload"
            >上传到服务器</el-button
          >
          <div slot="tip" class="el-upload__tip">
            只能上传JPG/JPEG/GIG/PNG文件，文件大小不能超过4M.
          </div>
        </el-upload>
      </div>
      
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pictures",
  components: {},
  data() {
    return {
      curreturnData: {},
      uploadUrl: "/Pics/uploadPics/",
      fileList: [],
      logo:'',
      imgList: [],
      Pics: {
        name: "",
        belongtoid: "",
        belongtotable: "",
        imgurl: "",
      },
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
    belongtotable: {
      type: String,
      default: "",
    },
    belongtoid: {
      type: String,
      default: "",
    },
  },
  methods: {

     fileChange(file){
      this.$refs.imgUpload.clearFiles() //清除文件对象
      this.logo = file.raw // 取出上传文件的对象，在其它地方也可以使用
      this.fileList = [{name: file.name, url: file.url}] // 重新手动赋值filstList， 免得自定义上传成功了, 而fileList并没有动态改变， 这样每次都是上传一个对象
    },
    deleteImg(e){
      
      let param = {id:e.currentTarget.id}
      this.$http.delete("/Pics/deleteImg/",{ params:param}).then((resp)=>{
        if (resp.data == 1){
          this.$message.success("删除成功")
          this.loadPics()
        }
      })
      
    },
    handleRemove(file, fileList) {
      console.log(file.name);
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file.name);
      console.log(file);
    },

    //图片索引数据上传数据库
    addPicsData(fileList, file) {
      this.Pics.name = file.name;
      this.Pics.belongtoid = this.belongtoid;
      this.Pics.belongtotable = this.belongtotable;
      this.Pics.imgurl = file.name;
      console.log(this.Pics);
      //在后端  public @ResponseBody boolean uploadPics(@RequestBody Pics pics)
      this.$http.post("Pics/addPicsData/", this.Pics).then((resp) => {});
      this.loadPics();
    },

    //根据belongtotable和belongtoid导入图片
    loadPics() {
      var param = {
        belongtotable: this.belongtotable,
        belongtoid: this.belongtoid,
      };
      this.$http.get("Pics/selectByExample", { params: param }).then((resp) => {
        if (resp) {
          this.imgList = resp.data;
          console.log(this.imgList)
        }
      });
    },

    //图片上传
    submitUpload() {
      this.$refs.imgUpload.submit();
    },

    getImgUrl(src) {
      var img = require("../assets/img/" + this.belongtotable + "/" + src);
      if (img == null) {
        return require("../assets/img/1.jpg");
      } else {
        return require("../assets/img/" + this.belongtotable + "/" + src);
      }
    },

    saveModify() {},
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
    this.loadPics();
  },
};
</script>

<style lang="scss">
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>