<template>
  <div id='fltj' ref='main' style='width: 500px; height: 380px'></div>
</template>

/* eslint-disable */
<script>
import echarts from 'echarts';
export default {
  methods: {
    setEchart() {
      var myChart = echarts.init(this.$refs.main);
      var option = {
        title: {
          text: '资产处置',
          padding: [0,100,0,100]
        },
        series: [
          {
            name: '出租情况',
            type: 'pie',
            data: [
              { value: 3, name: '已出租' },
              { value: 4, name: '未出租' },
              { value: 5, name: '意向' }
            ]
          }
        ]
      };
      myChart.clear();
      myChart.setOption(option, true);
    }
  },
  mounted() {
  this.setEchart()
}
};


</script>

<style>
</style>


