<template>
  <div style="width: 100%; height: 170px" ref="echartsContainer"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  DataZoomComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  BarChart,
  GridComponent,
  TooltipComponent,
  DataZoomComponent,
  CanvasRenderer,
]);

export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const chart = echarts.init(this.$refs.echartsContainer);

      const data = [
        { name: "临床医学", value: 6702221 },
        { name: "计算机科学与技术", value: 5283219 },
        { name: "英语", value: 4300002 },
        { name: "软件工程", value: 3858247 },
        { name: "法学", value: 3756792 },
        { name: "商务经济学", value: 3310956 },
        { name: "电气工程与智能控制", value: 2915147 },
        { name: "机械设计制造及其自动化", value: 2884426 },
        { name: "口腔医学", value: 2797374 },
        { name: "电气工程及其自动化", value: 2727680 },
      ];

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "10%",
          top: "15%",
          containLabel: true,
          borderColor: "#91c7f5",
        },
        xAxis: [
          {
            type: "category",
            data: data.map((item) => item.name),
            axisLabel: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "数据(人)",
            type: "bar",
            barWidth: "40%",
            data: data.map((item) => ({
              value: item.value,
              label: {
                show: true,
                position: "top", // 设置标签位置，在柱形图顶部显示
                color: "#fff", // 设置标签文字颜色
                rotate: 45,
                
                formatter: function(params) {
                  return params.name;
                },
              },
            })),
            itemStyle: {
              color: "#3057c0",
            },
          },
        ],
      };

      chart.setOption(option);
    },
  },
};
</script>
