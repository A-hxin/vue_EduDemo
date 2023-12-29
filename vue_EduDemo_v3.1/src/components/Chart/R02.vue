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
          ['清华大学', '综合类'],
          ['北京大学', '综合类'],
          ['浙江大学', '综合类'],
          ['上海交通大学', '综合类'],
          ['复旦大学', '综合类'],
          ['南京大学', '综合类'],
          ['中国科学技术大学', '综合类'],
          ['华中科技大学', '综合类'],
          ['武汉大学', '综合类'],
          ['西安交通大学', '综合类'],
          ['中山大学', '综合类'],
          ['四川大学', '综合类'],
          ['东南大学', '综合类'],
          ['同济大学', '综合类'],
          ['中国人民大学', '综合类'],

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
