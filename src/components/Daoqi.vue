<template>
  <div id="fltj" ref="main" style="width: 500px; height: 200px"></div>
</template>

/* eslint-disable */
<script>
import echarts from "echarts";
export default {
  methods: {
    setEchart() {
      var myChart = echarts.init(this.$refs.main);
      var option = {
        title: {
          text: "租金到期概况",
          padding: [0, 200, 0, 180],
        },
        tooltip: { trigger: "axis" },
        grid: { show: "true", borderWidth: "0" },

        xAxis: {
          splitLine: "false",
          type: "category",
          data: ["已逾期", "一月到期","三月到期",  "半年到期", "一年以上"],
          axisLabel: {
            //---坐标轴 标签
            show: true, //---是否显示
            inside: false, //---是否朝内
            // rotate: 45, //---旋转角度
            margin: 5, //---刻度标签与轴线之间的距离
            //color:'red',				//---默认取轴线的颜色
          },
        },
        yAxis: {
          name: "数量",
          type: "value",
          axisLabel: {
            //---坐标轴 标签
            show: true, //---是否显示
            inside: false, //---是否朝内
            rotate: 0, //---旋转角度
            margin: 8, //---刻度标签与轴线之间的距离
            //color:'red',				//---默认取轴线的颜色
          },
        },
        series: {
          type: "bar",
          data: [1,3,7,4,12],
          barWidth: "35%",
          itemStyle: {
            normal: {
              color: function(params){
                  var colorList = ['red','blue','yellow','green','black'];
                  return colorList[params.dataIndex]
              },
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      };
      myChart.clear();
      myChart.setOption(option, true);
    },
  },
  mounted() {
    this.setEchart();
  },
};
</script>

<style>
</style>
