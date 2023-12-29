<template>
  <div>
    <div ref="chart" style="width: 100%; height: 170px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      // chart: null,
      option: {
        tooltip: {
          show: true,
          // trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(0, 255, 233,0)" },
                  { offset: 0.5, color: "rgba(255, 255, 255,1)" },
                  { offset: 1, color: "rgba(0, 255, 233,0)" },
                ],
                global: true,
              },
            },
          },
        },
        grid: {
          top: "10%",
          left: "0",
          right: "0",
          bottom: "3%",
        },
        xAxis: [
          {
           show: true,
           axisLine: { show: true, lineStyle: { color: "#3057c0" } },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            splitNumber: 2,
            splitLine: {
              show: true,
              lineStyle: { color: "rgba(255,255,255,0.1)" },
            },
            axisLine: { show: true, lineStyle: { color: "#3057c0" } },
            axisLabel: {
              show: false,
              margin: 20,
              textStyle: { color: "#74ccda" },
            },
            axisTick: { show: true },
          },
        ],
        series: [
          {
            name: "计划招生人数(万人)",
            type: "line",
            // showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10, // 圆大小

            lineStyle: {
              normal: {
                color: "#74ccdsa",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 10,
                shadowOffsetY: 2, //阴影
                shadowOffsetX: 2,
              },
            },
            label: {
              // 显示文字文字颜色
              show: true,
              position: "top",
              rotate: 10,
              textStyle: { color: "#feffff" },
              formatter: function (params) {
                return params.name;   // 显示名称
              },
            },
            itemStyle: {
              color: "#74ccda",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: { show: true },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(109, 195, 210, 0.2)" },
                  { offset: 1, color: "rgba(108,80,243,0)" },
                ]),
                shadowColor: "rgba(108,80,243, 0.9)",
                shadowBlur: 10,
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.loadData();
  },
  methods: {
    loadData() {
      // 模拟API数据（用实际的API调用替换这部分）
      const apiData = [
      { name: "河南省", value: 1310000},
        { name: "山东省", value: 880000},
        { name: "河北省", value: 862000 },
        { name: "四川省", value: 800000 },
        { name: "广东省", value: 738000 },
        { name: "湖南省", value: 684000 },
        { name: "安徽省", value: 647000 },
        { name: "广西省", value: 612000 },
        { name: "江西省", value: 570000 },
        { name: "湖北省", value: 501000},

 
      ];

      const names = apiData.map((item) => item.name);
      const values = apiData.map((item) => item.value);

      this.option.xAxis[0].data = names;
      this.option.series[0].data = values;

      this.chart.setOption(this.option);
    },
  },
};
</script>

<style scoped>
/* 添加组件特定的样式 */
</style>
