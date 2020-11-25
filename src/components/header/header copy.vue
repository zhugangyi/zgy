<template>
  <div class="header-box">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <button class="btn-tool" title="折叠" @click="collapse">
          <i class="el-icon-d-arrow-left"></i>
        </button>
        <button class="btn-tool" title="刷新" @click="refresh">
          <i class="el-icon-refresh"></i>
        </button>
        <button class="btn-tool" title="全屏" @click="myutils.fullScreen">
          <i class="el-icon-rank"></i>
        </button>
        <button class="btn-tool" title="便签" @click="dialogVisible = true">
          <i class="el-icon-edit"></i>
        </button>
      </el-col>
      <el-col :span="6" align="right">
        <span>{{ myutils.todayDate() }}</span>
        <el-dropdown trigger="click" class="user-name" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile" disabled>个人资料</el-dropdown-item>
            <el-dropdown-item command="updatepwd" disabled>修改密码</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <!-- <el-col align="right" class="title">混凝土方量统计系统</el-col> -->
    </el-row>
    <el-dialog
      title="便签"
      width="400px"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      @closed="saveNotes"
    >
      <el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="notes"></el-input>
    </el-dialog>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      isCollapse: false,
      dialogVisible: false,
      notes:
        localStorage.getItem("notes") ||
        "便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录"
    };
  },
  methods: {
    collapse() {
      this.$store.commit("switchCollapse");
    },
    refresh() {
      this.reload();
    },
    saveNotes() {
      localStorage.setItem("notes", this.notes);
    },
    handleCommand(command) {
      switch (command) {
        case "logout":
          this.$router.replace({ path: "/login" });
          break;
      }
    }
  },
  computed: {
    username() {
      let { username } = JSON.parse(sessionStorage.getItem("user"));
      return username.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
  .homeHeader {
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
    width: 100%;
  }
  .homeHeader .title {
    font-size: 30px;
    font-family: 华文行楷;
    color: #ffffff;
  }
  .btn-tool {
    border: none;
    background: transparent;
    background-color: #409eff;
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
    text-align: left;
  }
  // .header-box {
  //   background-color: #409eff;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding: 0px 15px;
  //   box-sizing: border-box;
  //   float: left;
  //   widows: 100%;
  //   width: 100%;
  // }
  .title {
    text-align: left;
    font-size: 25px;
    font-family: 华文行楷;
    color: #d66f1a;
  }
  .user-name {
    margin-left: 20px;
  }
  .mystyle {
    font-size: 20px;
    color: red;
    font: 100;
    display: inline-block;
    width: 100%;
    content: " ";
    text-align: justify;
  }
</style>
