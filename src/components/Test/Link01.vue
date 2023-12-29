<!-- 
    实现链接跳转，Vue的动态组件
 -->
<template>
    <div>
      <button @click="showComponent('Bott031')">R01</button>
      <button @click="showComponent('Bott032')">R02</button>
      <component :is="getPage" />
    </div>
  </template>
  
  <script>
  import Bott031 from "../Chart/Bott031.vue";
  import Bott032 from "../Chart/Bott032.vue"; // Corrected import statement
  
  export default {
    data() {
      return {
        getPage: 'Bott031', // 默认显示第一个组件
      };
    },
    methods: {
      showComponent(componentName) {
        // 根据点击的按钮切换当前组件
        this.getPage = componentName;
      },
    },
    components: {
      Bott031,
      Bott032,
    },
  };
  </script>
  