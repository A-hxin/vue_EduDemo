<template>
  <div style="width: 100%; height: 380px" ref="echartsContainer"></div>
</template>
  
  <script>
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([PieChart, CanvasRenderer]);

export default {
  data() {
    return {
      echartsData: [
        { value: 1361, name: "本科" },
        { value: 1528, name: "专科" },
        { value: 2100, name: "公办" },
        { value: 780, name: "民办" },
        { value: 20, name: "中外合作办学" },
        { value: 3, name: "内地与港澳台\n地区合作办学" },
      ],
      colorList: [
        "#6deafc",
        "#52b6f7",
        "#346ef2",
        "#5794a3",
        "#9ebefa",
        "#5794a3",
        "#9ebefa",
        "#6deafc",
        "#52b6f7",
        "#346ef2",
        "#5794a3",
        "#9ebefa",
        "#5794a3",
        "#9ebefa",
        
    
      ],
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const chart = echarts.init(this.$refs.echartsContainer);

      const option = {
        grid: {
          left: 0, // 距离容器左边距离
          right: 0, // 距离容器右边距离
          top: 0, // 距离容器上边距离
          bottom: 0, // 距离容器下边距离
          // containLabel: true, // 包含坐标轴的刻度标签
        },
        color: this.colorList,
        legend: {
          orient: "vertical",
          top: "center",
          icon: "circle",
          right: 30,
          itemGap: 16,
          itemWidth: 8,
          itemHeight: 8,
          show: false, // 图表旁边的数据
          textStyle: {
            color: "#666",
            fontSize: 12,
          },
          data: this.echartsData?.map((x) => x.name),
        },
        tooltip: {
          trigger: "item",
          show: true, // 鼠标悬浮于上方
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            // name: "全国办学类型比例",
            type: "pie",
            radius: ["30%", "60%"],
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              show: true, // 标签
              position: "outside",
              fontSize: 8,
              formatter: (params) => {
                return `{a|${params.name}}`;
              },
              rich: {
                a: {
                  align: "left",
                  fontSize: 12,
                },
              },
            },
            labelLine: {
              length: 3, //引导线的长度
              length2: 20,
            },
            data: this.echartsData.map((item, index) => {
              return {
                ...item,
                label: {
                  color: this.colorList[index],
                },
              };
            }),
          },
        ],
      };

      chart.setOption(option);
    },
  },
};
</script>
  