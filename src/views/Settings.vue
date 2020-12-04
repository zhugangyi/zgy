 <template>
 <div>
 <br />
 <br />
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="客户管理" name="first">资产登记</el-tab-pane>
    <el-tab-pane label="资产状态" name="second">客户管理</el-tab-pane>
    <el-tab-pane label="资产类型" name="third">
        <Type />
    </el-tab-pane>
    <el-tab-pane label="地区设置" name="fourth">
        <Area />
    </el-tab-pane>
    <el-tab-pane label="用户权限管理" name="fifth">用户权限管理</el-tab-pane>
  </el-tabs>
 </div>

</template>

 <script>
 import Area from '@/components/cards/area'
 import Type from '@/components/cards/type'
 export default {
     data(){
         return{
             activeName:""
         }
     },
     components: {
         Area,
         Type
     },
     methods:{
         handleClick(){

         }
     }
 }
</script>
<style lang="stylus"></style>