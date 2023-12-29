<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";

import { RouterView } from "vue-router";


export default {
  name: "App",
  components: {
    HelloWorld,
    Home,
    RouterView,
  },
};
</script>

<template>
  <div id="app">
    <!-- <h2>网站正在开发，数据仅作测试！！</h2> -->
    <!-- <RouterView /> -->
    <bigApp />
  </div>
</template> 

<style>
/* 这里可以添加一些全局样式 */
body {
  background: url(./img/bg02.png);
  background-color: #030f2a;
  background-size: 100%;
}
</style>
