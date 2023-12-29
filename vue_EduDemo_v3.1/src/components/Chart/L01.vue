<template>
  <div>
    <div ref="echarts" style="height: 170px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// Register the necessary components
echarts.use([TooltipComponent, LegendComponent, TreemapChart, CanvasRenderer]);

export default {
  data() {
    return {
      count: 100,
      data: [
        { itemStyle: { color: "#5794a3" }, name: "江苏省", value: 168 },
        { itemStyle: { color: "#122631" }, name: "河南省", value: 168 },
        { itemStyle: { color: "#50798b" }, name: "广东省", value: 162 },
        { itemStyle: { color: "#061739" }, name: "山东省", value: 156 },
        { itemStyle: { color: "#0a2146" }, name: "四川省", value: 137 },
        { itemStyle: { color: "#6db4f1" }, name: "湖北省", value: 132 },
        { itemStyle: { color: "#6593a1" }, name: "湖南省", value: 137 },
        { itemStyle: { color: "#50798b" }, name: "上海市", value: 142 },
        { itemStyle: { color: "#50798b" }, name: "安徽省", value: 121 },
        { itemStyle: { color: "#50798b" }, name: "浙江省", value: 109 },
      ],
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const echartsContainer = this.$refs.echarts;
      const myChart = echarts.init(echartsContainer);
      const option = {
        grid: {
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          // containLabel: true,
          // borderColor: "#91c7f5",
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#0C0D0D",
          borderWidth: 0,
          textStyle: {
            color: "#D3FFFF",
          },
          formatter: (params) => {
            return `${params.name}
           ${params.value}&nbsp&nbsp所`;
          },
        },
        legend: {},
        series: [
          {
            type: "treemap",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            nodeClick: false,
            breadcrumb: { show: false },
            data: this.data,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style>
/* 可以添加样式以适应你的需求 */
</style>
