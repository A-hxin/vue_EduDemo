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
            ['湛江科技学院', '439/234864'],
            ['广州工商学院', '439/236072'],
            ['广州科技职业技术大学', '439/235906'],
            ['广东理工学院', '439/236084'],
            ['广东工商职业技术大学', '439/236080'],
            ['广州工商学院', '440/234135'],
            ['湛江科技学院', '439/234864'],
            ['广州科技职业技术大学', '445/226027'],
            ['广州华立学院', '446/224073'],
            ['广东科技学院', '448/222218'],
          ],
          index: true,
          columnWidth: [40],
          // align: ['center'],
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
  