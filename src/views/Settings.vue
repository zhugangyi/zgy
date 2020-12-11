 <template>
  <div>
    <br />
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick(activeName)"
    >
      <el-tab-pane
        v-for="(item, index) in settingsRoute"
        :key="index"
        :label="item.labelname"
        :name="item.curRoute"
      >
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
    <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="客户管理" name="first">
        <Custom />
    </el-tab-pane>
    <el-tab-pane label="资产状态" name="second">
        <AssetStatus />
    </el-tab-pane>
    <el-tab-pane label="资产类型" name="third">
        <Type />
    </el-tab-pane>
    <el-tab-pane label="地区设置" name="fourth">
        <Area />
    </el-tab-pane>
    <el-tab-pane label="用户权限管理" name="fifth">用户权限管理</el-tab-pane>
  </el-tabs> -->
  </div>
</template>

 <script>
// import Area from "@/components/cards/area";
// import Type from "@/components/cards/type";
// import AssetStatus from "@/components/cards/assetStatus";
// import Custom from "@/components/cards/custom"; 

export default {
  data() {
    return {
      activeName: "custom",
      settingsRoute: [
        {
          activeName: "custom",
          curRoute: "custom",
          labelname: "客户资料",
        },

        // { activeName: "customEdit", curRoute: "customEdit", labelname: "客户编辑" },
        {
          activeName: "area",
          curRoute: "area",
          labelname: "地区资料",
        },
        {
          activeName: "assetType",
          curRoute: "assetType",
          labelname: "资产类型",
        },
        {
          activeName: "assetStatus",
          curRoute: "assetStatus",
          labelname: "资产状态",
        },
      ],
    };
  },
  components: {
    // Area,
    // Type,
    // AssetStatus,
    // Custom,
  },
  methods: {
    handleClick(activeName) {
      this.$router.replace({ path: activeName });
    },
  },
};
</script>
<style lang="stylus"></style>