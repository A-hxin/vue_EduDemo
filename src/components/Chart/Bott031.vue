<template>
  <div class="demo-bg">
    <dv-scroll-board :config="config" style="width: 100%; height: 170px" />
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      config: {
        // header: ['名称', '类别','录取批次','最低分/位次'],
        data: [
          ["清华大学", "694/79"],
          ["北京大学", "694/84"],
          ["上海交通大学","692/110"],
          ["复旦大学",  "691/114"],
          ["上海交通大学医学院",  "691/114"],
          ["复旦大学上海医学院", "686/213"],
          ["北京大学医学部", "685/253"],
          ["浙江大学", "681/383"],
          ["南京大学",  "676/633"],
          ["中国科学技术大学", "675/705"],
        ],
        index: true,
        columnWidth: [40],
        align: ["center"],
        rowNum: 5,
      },
    };
  },
  methods: {
    mouseoverHandler(e) {
      console.log(e);
    },
    clickHandler(e) {
      console.log(e);
    },
  },
};
</script>
  