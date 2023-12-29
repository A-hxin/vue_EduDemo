<template>
  <div class="content">
    <div ref="charts"  id="mapBoxSolSet" style="width: 100%;"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from "@/assets/china.json";

export default {
  data() {
    return {
      points: [
        {
          name: "北京",
          value: [116.407387, 39.904179],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 100,
        },
        {
          name: "上海",
          value: [116.407387, 30.904179],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        },
        {
          name: "新疆",
          value: [87.628579, 43.793301],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 新疆
        {
          name: "四川",
          value: [104.076452, 30.651696],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 四川
        {
          name: "甘肃",
          value: [103.826777, 36.060634],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 甘肃
        {
          name: "云南",
          value: [102.709372, 25.046432],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 云南
        {
          name: "广西",
          value: [108.327537, 22.816659],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 广西
        {
          name: "湖南",
          value: [112.982951, 28.116007],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 湖南
        {
          name: "山东",
          value: [117.020725, 36.670201],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 山东
        {
          name: "河南",
          value: [113.753094, 34.767052],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 河南
        {
          name: "山西",
          value: [112.578781, 37.813948],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 山西
        {
          name: "福建",
          value: [119.296194, 26.101082],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 福建
        {
          name: "浙江",
          value: [120.152575, 30.266619],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 浙江
        {
          name: "江苏",
          value: [118.763563, 32.061377],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 江苏
        {
          name: "北京",
          value: [116.407387, 39.904179],
          itemStyle: { color: "#A6283F" },
          schoolCount: 300,
        }, // 北京
        {
          name: "陕西",
          value: [108.953939, 34.266611],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 陕西
        {
          name: "广东",
          value: [113.266887, 23.133306],
          itemStyle: { color: "#00EEFF" },
          schoolCount: 300,
        }, // 广东

        // 添加其他具有schoolCount属性的城市
      ],
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const charts = echarts.init(this.$refs["charts"]);
      const option = {
        backgroundColor: "rgb(0,0,0,0.1)",
        grid: {
          top: "10%",
          left: "5%",
          right: "5%",
          bottom: "15%",
        },
        geo: {
          map: "china",
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#5089EC",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 102, 154, 0)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 102, 154, .4)",
                  },
                ],
              },
            },
            emphasis: {
              areaColor: "#2386AD",
              borderWidth: 0,
            },
          },
        },
        // series: [
        //   {
        //     type: 'effectScatter',
        //     coordinateSystem: 'geo',
        //     effectType: 'ripple',
        //     showEffectOn: 'render',
        //     rippleEffect: {
        //       period: 10,
        //       scale: 4,
        //       brushType: 'fill'
        //     },
        //     // zlevel: 1,
        //     // data: this.points,
        //     // emphasis: {
        //     //   label: {
        //     //     show: true,
        //     //     formatter: (params) => {
        //     //       return `${params.data.name}\n办学数量: ${params.data.schoolCount}`;
        //     //     },
        //     //     position: 'top',
        //     //   },
        //     // },

        //       tooltip:{
        //         show: true,
        //         formatter: function (params){
        //           // return params.name + '&nbsp;&nbsp;&nbsp;&nbsp;' + params.value
        //           return `${params.data.name}\n办学数量: ${params.data.schoolCount}`;
        //         }
        //       },

        //   },
        // ]
        // 鼠标悬浮提示框
        series: [
          {
            name: "省份",
            type: "map",
            geoIndex: 0,
            data: this.dataList,
          },
        ],
        tooltip: {
          zlevel: 1,
          data: this.points,
          //数据格式化
          formatter: function (params, callback) {
            return (
              params.seriesName + "<br />" + params.name + "办学数量："+ "：" + params.schoolCount
            );
          },
        },
      };

      echarts.registerMap("china", china);
      charts.setOption(option);

      // Add click event listener
      charts.on("click", this.handleCityClick);
    },
  },
};
</script>

<style scoped>
.content {
  height: 100%;
}

#mapBoxSolSet{
  height: 620px; /* 默认高度 */

/* 媒体查询：当视口宽度小于400px时，修改#mapBoxSolSet的高度为320px */
@media (max-width: 400px) {
  height: 320px;
}
}
</style>
