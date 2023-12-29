<template>
    <div>
      <div class="box">
        {{ boxContent }}
      </div>
      <button @click="changeContent('Button 1')">Button 1</button>
      <button @click="changeContent('Button 2')">Button 2</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boxContent: "初始内容"
      };
    },
    methods: {
      changeContent(newContent) {
        this.boxContent = newContent;
      }
    }
  }; 
  </script>
  
  <style>
  /* 样式用于示例，可以根据实际需要进行调整 */
  .box {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
  }
  </style>
  