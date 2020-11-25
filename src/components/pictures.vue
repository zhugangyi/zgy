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
      style="padding-top: 120px; padding-left: 100px"
    >
      <div>
        <el-row>
          <el-col :span="6" v-for="(item, index) in pictures" :key="index">
            <div>
              <el-card>
                <viewer :image="pictures">
                  <img :src="item.img" style="width: 100%" alt="" />
                </viewer>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <div class="form-signin-heading" id="btnUpload" @change="upload">
          上传图片
        </div>
        <input
          type="file"
          name="avatar"
          id="avatar"
          multiple="multiple"
          @change="upload"
        />
        <!-- <img :src="'http://localhost:8888'+item.photos_url" alt=""/> -->
        <el-button style="padding: 10px; float: right" @click="cancelModify"
          >删除</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
export default {
  name: "pictures",
  data() {
    return {
      curreturnData: {},
      pictures: [
        {
          id: 1,
          title: "邬枝蒨1",
          price: "100",
          img: require("../img/1.jpg"),
          count: 100,
        },
        {
          id: 2,
          title: "邬枝蒨2",
          price: "100",
          img: require("../img/2.jpg"),
          count: 100,
        },
        {
          id: 3,
          title: "邬枝蒨3",
          price: "100",
          img: require("../img/5.jpg"),
          count: 100,
        },
        {
          id: 4,
          title: "邬枝蒨4",
          price: "100",
          img: require("../img/4.jpg"),
          count: 100,
        },
      ],
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
    upload: function (e) {
      var that = this;
      let formData = new window.FormData();
      let file = e.target.files[0];
      formData.append("file", file); //通过append向form对象添加数据
      //利用split切割，拿到上传文件的格式
      var src = file.name,
        formart = src.split(".")[1];
      //使用if判断上传文件格式是否符合
      if (
        formart == "jpg" ||
        formart == "png" ||
        formart == "docx" ||
        formart == "txt" ||
        formart == "ppt" ||
        formart == "xlsx" ||
        formart == "zip" ||
        formart == "rar" ||
        formart == "doc"
      ) {
        //只有满足以上格式时，才会触发ajax请求
        this.$axios
          .post(this.$api.personalCenter.upFile, formData)
          .then(function (res) {
            that.upFileData = res.data;
          })
          .then(function (res) {
            var params = {
              photos_url: that.upFileData,
              photo_des: "",
            };
            //      console.log(params.photos_url,'photos_url')
            that.$axios
              .post(that.$api.personalCenter.wallAdd, file.stringify(params))
              .then(function (res) {
                console.log(res.data);
                that.$options.methods.imgList.bind(that)();
              })
              .catch(function (err) {
                console.log(err);
                console.log("请求出错");
              });
          });
      } else {
        alert("文件格式不支持上传");
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
};
</script>

<style lang="scss">
</style>