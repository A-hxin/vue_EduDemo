<template>
  <!-- 顶部 -->
  <el-row>
    <el-col :md="24">
      <div id="topBox" small-bg style="position: relative">
        <h4
          style="
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-size: 80%;
            padding-top: 5px;
          "
        >
          全国高等院校志愿填报可视化
        </h4>
        <dv-decoration5
          :dur="2"
          style="
            width: 80%;
            height: 50px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          "
        />
      </div>
    </el-col>
  </el-row>
  <!-- 内容部分 -->
  <dv-border-box1>
    <!-- 第一部分 -->
    <el-row :gutter="10" style="padding: 15px">
      <!-- 左边盒子 -->
      <el-col :lg="6" :xs="24">
        <!-- 第一个 -->
        <div demo-bg>
          <dv-border-box8 :reverse="true">
            <div dv-bg>
              <!-- 右1 -->
              <div class="rightBox">
                <!-- 小标题 -->
                <!-- <div class="BoxTitle">》全国招生计划数</div> -->
                <div style="display: flex">
                  <dv-button :bg="false">人气专业排行Top10</dv-button>
                </div>
                <!-- 地图模块 -->
                <div class="tuBox">
                  <R01 />
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>

        <!-- 第二个 -->
        <div demo-bg>
          <dv-border-box8 :reverse="true">
            <div dv-bg>
              <!-- 右2 -->
              <div class="rightBox">
                <div style="display: flex">
                  <dv-button :bg="false">全国综合院校排名</dv-button>
                </div>
                <div class="tuBox">
                  <R02 />
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>
        <!-- 第三个 -->
        <div demo-bg>
          <dv-border-box8 :reverse="true">
            <div dv-bg>
              <!-- 右3 -->
              <div class="rightBox">
                <div style="display: flex">
                  <dv-button :bg="false">全国专科院校排名</dv-button>
                </div>
                <div class="tuBox">
                  <R03 />
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>
      </el-col>
      <!-- 中间盒子 -->
      <el-col :lg="12" :xs="24">
        <div class="midBox" style="position: relative">
          <!-- 数据盒子 -->
          <!-- 地图 -->
          <div class="BoxMap">
            <a
              href="http://www.graphvis.cn/graphvis/university/province.html?name=guangdong"
            >
              <EchartsMap />
            </a>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :xs="24">
        <!-- 添加边框 -->
        <div demo-bg>
          <dv-border-box8 :dur="5">
            <div dv-bg>
              <!-- 左边盒子 -->
              <div class="leftBox">
                <div style="display: flex">
                  <dv-button :bg="false">各省办学量Top10</dv-button>
                </div>
                <div class="tuBox">
                  <L01 />
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>
        <!-- 右边盒子2 -->
        <div demo-bg>
          <dv-border-box8 :dur="3">
            <div dv-bg>
              <!-- 左边盒子 -->
              <div class="leftBox">
                <div style="display: flex">
                  <dv-button :bg="false">全国办学类型比例</dv-button>
                </div>
                <div class="tuBox" style="height: 380px">
                  <L02 />
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>
      </el-col>
    </el-row>
    <!-- 第二部分 -->
    <el-row :gutter="10" style="padding: 15px">
      <!-- 下左1 -->
      <el-col :lg="8" :xs="24">
        <div demo-bg>
          <dv-border-box8 :dur="5">
            <div dv-bg>
              <div class="vBox">
                <div style="display: flex">
                  <dv-button :bg="false">全国招生计划Top10</dv-button>
                </div>

                <div class="tuBox">
                  <Boot01 />
                  <!-- <R01 /> -->
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>
      </el-col>

      <!-- 下左2 -->
      <el-col :lg="8" :xs="24">
        <div demo-bg>
          <dv-border-box8 :dur="5">
            <div dv-bg>
              <div class="vBox">
                <div style="display: flex">
                  <dv-button :bg="false" @click="showComponent('Bott031')"
                    >Top10录取分数线</dv-button
                  >
                  <dv-button :bg="false" @click="showComponent('Bott032')"
                    >最低录取分数线</dv-button
                  >
                </div>

                <div class="tuBox">
                  <component :is="getPage" />
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>
      </el-col>

      <!-- 下左3 -->
      <el-col :lg="8" :xs="24">
        <div demo-bg>
          <dv-border-box8 :dur="5">
            <div dv-bg>
              <div class="vBox">
                <div style="display: flex">
                  <dv-button :bg="false">全国一分一段</dv-button>
                  <!-- 按钮 -->
                  <div style="margin-left: 30px">
                    <div class="flex flex-wrap items-center">
                      <el-dropdown
                        split-button
                        type="primary"
                        @click="handleClick"
                      >
                        {{ currentPageName }}
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item @click="getYiFen('GuangDong')"
                              >广东</el-dropdown-item
                            >
                            <el-dropdown-item @click="getYiFen('BeiJing')"
                              >北京</el-dropdown-item
                            >
                            <el-dropdown-item @click="getYiFen('FuJian')"
                              >福建</el-dropdown-item
                            >
                            <el-dropdown-item @click="getYiFen('HeBei')"
                              >河北</el-dropdown-item
                            >
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </div>
                  </div>
                </div>

                <div class="tuBox">
                  <!-- <Bott033 /> -->
                  <component :is="getPageYiFen" />
                </div>
              </div>
            </div>
          </dv-border-box8>
        </div>
      </el-col>
    </el-row>
  </dv-border-box1>
</template>

<script>
import Bott031 from "../Chart/Bott031.vue";
import Bott032 from "../Chart/Bott032.vue";

// 一分一段组件
import GuangDong from "../score/GuangDong.vue";
import BeiJing from "../score/BeiJing.vue";
import FuJian from "../score/FuJian.vue";
import HeBei from "../score/HeBei.vue";

export default {
  data() {
    return {
      getPage: "Bott031", // 默认显示第一个组件
      getPageYiFen: "GuangDong", // 默认显分段第一个组件 一分一段组件
    };
  },
  computed: {
    currentPageName() {
      // 返回当前显示的组件名字
      return this.getPageYiFen;
    },
  },
  methods: {
    showComponent(componentName) {
      // 根据点击的按钮切换当前组件
      this.getPage = componentName;
    },
    getYiFen(componentNameGetYiFen) {
      // 根据点击的按钮切换当前组件
      this.getPageYiFen = componentNameGetYiFen;
    },
  },
  components: {
    Bott031,
    Bott032,
    // 一分一段
    GuangDong,
    BeiJing,
    FuJian,
    HeBei,
  },
};
</script>

<style>
</style>