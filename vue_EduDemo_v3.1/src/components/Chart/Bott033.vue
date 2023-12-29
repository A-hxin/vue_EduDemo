<template>
  <div style="width: 100%; height: 170px" ref="chart"></div>
</template>
  
  <script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      chartData: [
        { score: "700-750", currentCount: 27, cumulativeCount: 27 },
        { score: "699", currentCount: 8, cumulativeCount: 35 },
        { score: "698", currentCount: 4, cumulativeCount: 39 },
        { score: "697", currentCount: 6, cumulativeCount: 45 },
        { score: "696", currentCount: 12, cumulativeCount: 57 },
        { score: "695", currentCount: 14, cumulativeCount: 71 },
        { score: "694", currentCount: 14, cumulativeCount: 85 },
        { score: "693", currentCount: 11, cumulativeCount: 96 },
        { score: "692", currentCount: 15, cumulativeCount: 111 },
        { score: "691", currentCount: 13, cumulativeCount: 124 },
        { score: "690", currentCount: 18, cumulativeCount: 142 },
        { score: "689", currentCount: 19, cumulativeCount: 161 },
        { score: "688", currentCount: 20, cumulativeCount: 181 },
        { score: "687", currentCount: 19, cumulativeCount: 200 },
        { score: "686", currentCount: 27, cumulativeCount: 227 },
        { score: "685", currentCount: 27, cumulativeCount: 254 },
        { score: "684", currentCount: 38, cumulativeCount: 292 },
        { score: "683", currentCount: 42, cumulativeCount: 334 },
        { score: "682", currentCount: 28, cumulativeCount: 362 },
        { score: "681", currentCount: 40, cumulativeCount: 402 },
        { score: "680", currentCount: 50, cumulativeCount: 452 },
        { score: "679", currentCount: 38, cumulativeCount: 490 },
        { score: "678", currentCount: 43, cumulativeCount: 533 },
        { score: "677", currentCount: 61, cumulativeCount: 594 },
        { score: "676", currentCount: 48, cumulativeCount: 642 },
        { score: "675", currentCount: 65, cumulativeCount: 707 },
        { score: "674", currentCount: 74, cumulativeCount: 781 },
        { score: "673", currentCount: 55, cumulativeCount: 836 },
        { score: "672", currentCount: 75, cumulativeCount: 911 },
        { score: "671", currentCount: 73, cumulativeCount: 984 },
      ],
    };
  },
  mounted() {
    this.renderChart();
    // 添加窗口大小变化监听器，以便在窗口大小变化时重新渲染图表
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    // 在组件销毁之前移除窗口大小变化监听器
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    renderChart() {
      const chart = echarts.init(this.$refs.chart);
      const xAxisData = this.chartData.map((item) => item.score);
      const seriesData1 = this.chartData.map((item) => item.currentCount);
      const seriesData2 = this.chartData.map((item) => item.cumulativeCount);

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          top: "0",
          left: "2",
          right: "2",
          bottom: "45%",
        },
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人数",
            min: 0,
            interval: 10,
            axisLabel: {
              formatter: "{value}",
            },
            // 背景线颜色
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
          },
        ],
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 40,
          },
          {
            type: "inside",
            start: 0,
            end: 50,
          },
        ],
        series: [
          {
            name: "累计人数",
            type: "line",
            data: seriesData1,
            itemStyle: {
              color: "#7565b4",
            },
          },
          {
            name: "本段人数",
            type: "bar",
            data: seriesData2,
            itemStyle: {
              color: "#3e61be",
            },
          },
        ],
      };

      chart.setOption(option);
    },
    handleResize() {
      // 窗口大小变化时重新渲染图表
      this.$nextTick(() => {
        this.renderChart();
      });
    },
  },
};
</script>
  
  <style>
/* 可以添加样式 */
</style>
  