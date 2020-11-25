<template>
  <div>
    <el-container>
      <el-aside style="width: 500px; height: 800px;margin-bottom:0">
        <div>  
          <Daoqi style="width: 500px; height: 250px;margin-top: 30px" />        
        </div>
        <div>
          <pie style="width: 500px; height: 250px;margin-top: 10px" />
        </div>

        <div>
          <caiwu style="width: 500px; height: 250px;margin-top: 10px" />
        </div>
      </el-aside>
      <el-main style="margin-top:20px;width:500px">
        <h1 align="center">资产分布图</h1>
        <mapBaidu />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import pie from "@/components/dispatchStatus";
import caiwu from "@/components/caiwu";
import MapBaidu from '@/components/mapBaidu';
import Daoqi from '@/components/Daoqi'
// import './layui-src/css/layui.css';
// import './layui/layui.js'
// import '../assets/css/layui.css'

export default {
  components: {
    pie,
    caiwu,
    MapBaidu,
    Daoqi
  },
};
</script>

<style lang="scss">

</style>
