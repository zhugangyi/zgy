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
          text: "租金收取概况(万元)",
          padding: [0, 200, 0, 180],
        },
        tooltip: { trigger: "axis" },
        grid: { show: "true", borderWidth: "0" },

        xAxis: {
          splitLine: "false",
          type: "category",
          data: ["本年已收", "本年未收","本年空置",  "上年已收", "上年未收","上年空置"],
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
          name: "金额",
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
          data: [358, 121,23, 370, 19,180],
          barWidth: "35%",
          itemStyle: {
            normal: {
              color: function(params){
                  var colorList = ['blue','red','black','blue','red','black'];
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
