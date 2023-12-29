<template>
  <div class="demo-bg">
    <dv-scroll-board :config="config" style="width:100%;height:170px"  />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        // header: ['名称', '类别','录取批次','最低分/位次'],
        data: [
          ['金华职业技术学院', '综合类'],
          ['陕西工业职业技术学院', '综合类'],
          ['重庆电子工程职业学院', '理工类'],
          ['北京电子科技职业学院', '理工类'],
          ['天津市职业大学', '综合类'],
          ['广东轻工职业技术学院', '理工类'],
          ['黄河水利职业技术学院', '理工类']
        ],
        index: true,
        columnWidth: [40],
        align: ['center'],
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
