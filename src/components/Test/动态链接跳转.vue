<template>
    <div class="flex flex-wrap items-center">
      <el-dropdown split-button type="primary" @click="handleClick">
        {{ currentPageName }}
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="getYiFen('GuangDong')">广东</el-dropdown-item>
            <el-dropdown-item @click="getYiFen('BeiJing')">北京</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  
    <component :is="getPageYiFen" />
  
  
  </template>
  
  <script>
  import GuangDong from './score/GuangDong.vue';
  import BeiJing from './score/BeiJing.vue';
  
  export default {
    data() {
      return {
        getPageYiFen: 'GuangDong', // 默认显示第一个组件
      };
    },
    computed: {
      currentPageName() {
        // 返回当前显示的组件名字
        return this.getPageYiFen;
      },
    },
    methods: {
      getYiFen(componentNameGetYiFen) {
        // 根据点击的按钮切换当前组件
        this.getPageYiFen = componentNameGetYiFen;
      },
    },
    components: {
      GuangDong,
      BeiJing,
    },
  };
  </script>
  
  <style scoped>
  .example-showcase .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
  </style>
  