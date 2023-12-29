<template>
    <div>
      <div ref="echartsContainer" style="width: 100%; height: 200px;"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    GridComponent
  } from 'echarts/components';
  import { CanvasRenderer } from 'echarts/renderers';
  
  echarts.use([BarChart, TitleComponent, TooltipComponent, GridComponent, CanvasRenderer]);
  
  export default {
    mounted() {
      // 初始化图表，传入DOM元素
      var myChart = echarts.init(this.$refs.echartsContainer);
  
      // 设置图表配置项
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例',
          textStyle: {
            color: 'white' // 设置标题文字颜色为白色
            
          }
        },
        grid: {
          top: 50,
          right: 10,
          left: 30,
          bottom: 30
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          axisLabel: {
            textStyle: {
              color: 'white' // 设置X轴文字颜色为白色
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: 'white' // 设置Y轴文字颜色为白色
            }
          }
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            label: {
              show: true,
              color: 'white' // 设置柱状图上的文字颜色为白色
            },
            itemStyle: {
              color: '#6b72e8'
            }
          }
        ]
      });
    }
  };
  </script>
  
  <style>
  /* 可以根据需要添加一些样式 */
  </style>
  