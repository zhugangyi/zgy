<template>
  <div>
    <div>dsfa</div>
    <div id="mapChart" style="width: 500px; height: 380px"></div>
  </div>
</template>


<script>
/* eslint-disable */
import echarts from "echarts";
// import "echarts/map/js/china.js";
// import zhejiang from "echarts/map/json/province/zhejiang.json";
import ningbo from '@/assets/330200.json'
// import binzhou from "echarts/map/json/binzhou.json";
// import dezhou from "echarts/map/json/dezhou.json";
// import dongying from "echarts/map/json/dongying.json";
// import heze from "echarts/map/json/heze.json";
// import jinan from "echarts/map/json/jinan.json";
// import jining from "echarts/map/json/jining.json";
// import laiwu from "echarts/map/json/laiwu.json";
// import liaocheng from "echarts/map/json/liaocheng.json";
// import linyi from "echarts/map/json/linyi.json";
// import qingdao from "echarts/map/json/qingdao.json";
// import rizhao from "echarts/map/json/rizhao.json";
// import taian from "echarts/map/json/taian.json";
// import weifang from "echarts/map/json/weifang.json";
// import weihai from "echarts/map/json/weihai.json";
// import yantai from "echarts/map/json/yantai.json";
// import zaozhuang from "echarts/map/json/zaozhuang.json";
// import zibo from "echarts/map/json/zibo.json";

export default {
  name: "echart-map",
  data() {
    var jsonMap = {
      宁波: ningbo,
    };
    //循环遍历注册地图
    for (let index in jsonMap) {
      echarts.registerMap(index, jsonMap[index]);
    }
    return {};
  },

  methods: {
    /* eslint-disable */

    chinaConfigure() {
      console.log(this.userJson);
      let myChart = echarts.init(document.getElementById("mapChart")); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;

      myChart.setOption({
        // 进行相关配置
        backgroundColor: "#02AFDB",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"],
        },
        geo: {
          // 这个是重点配置区
          map: "宁波", // 根据名字显示中国地图，省或市地图，
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: "启动次数", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "北京",
                value: 599,
              },
              {
                name: "上海",
                value: 142,
              },
              {
                name: "黑龙江",
                value: 44,
              },
              {
                name: "深圳",
                value: 92,
              },
              {
                name: "湖北",
                value: 810,
              },
              {
                name: "四川",
                value: 453,
              },
            ],
          },
        ],
      });
    },

    getMap() {
      let mapOption = {
        title: "", //标题
        tooltip: {
          //此处是根据后端数据进行hover 展示的提示框，可用官网上默认的
          trigger: "item",
          formatter: function (params) {
            return (
              params.name +
              " ( " +
              params.data.value[2] +
              " ) " +
              "</br>" +
              "飞机" +
              " : " +
              params.data.aircraftNum +
              "</br>"
            );
          },
        },
        legend: {
          //标签
          orient: "vertical",
          y: "bottom",
          x: "right",
          data: ["行踪轨迹"],
          textStyle: {
            color: "#fff",
          },
        },
        visualMap: {
          //颜色轴，可以根据数据点的值大小，展示不同的颜色，或用来展示地图块的不同颜色
          min: 0,
          max: 200,
          calculable: true,
          inRange: {
            color: ["#3dda8e", "#eac736", "#d94e5d"],
          },
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          //配置地图参数
          map: "china",
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#058bd2",
              borderColor: "#111",
            },
            emphasis: {
              areaColor: "#1e67b2",
            },
          },
        },
        series: [
          {
            //根据数据展示点，并显示为波纹效果
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            //波纹效果
            rippleEffect: {
              period: 2,
              brushType: "stroke",
              scale: 3,
            },
            label: {
              normal: {
                show: true,
                color: "#fff",
                position: "right",
                formatter: "{b}",
              },
            },
            //圆点大小
            symbolSize: 16,
            // data: convertData(data),
          },
        ],
      };
      //用$echarts是因为上面注册使用的 Vue.prototype.$echarts
      var myChart = echarts.init(document.getElementById("mapChart"));
      myChart.setOption(mapOption);
    },
  },
  mounted() {
    this.chinaConfigure();
  },
};
</script>

<style>
</style>


